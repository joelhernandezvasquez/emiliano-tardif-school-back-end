
import { prisma } from "../../data/postgres";
import { Prisma } from "@prisma/client";
import { CustomError } from "../../domain/errors/custom.error";
import { Student, StudentQueryParams, StudentsSummary } from "../interfaces/student.interface";
import { CourseServices } from "./course.service";
import { Util } from "../../config/util";
import { StudentCourse } from "../interfaces/studentCourse.interface";

enum filterConditionValues{
    Active = 'Active',
    Inactive = 'Inactive',
    Recent = 'Recent',
    Oldest = 'Oldest',
    AZ = 'Name (A-Z)',
    ZA = 'Name (Z-A)',
    MostCourses='Most Courses',
    LeastCourses = 'Least Courses'
}

const ITEMS_PER_PAGE = 7;

const studentListSelect = {
    id:true,
    first_name:true,
    last_name:true,
    email:true,
    phone:true,
    gender:true,
    direccion:true,
    parroquia:true,
    asuntos_medicos:true,
    active:true,
    created_at:true
} satisfies Prisma.StudentsSelect;

export class StudentServices{

    constructor(){}

    private checkIfStudentExist = async (student:Student):Promise<Boolean>=>{
      try{
         const studentExist = await prisma.students.findFirst({
            where: {
                phone: student.phone,
                first_name: { equals: student.first_name, mode: 'insensitive' },
                last_name: { equals: student.last_name, mode: 'insensitive' }
              }});
          
              return studentExist ? true : false;
      }
      catch(err){
         throw CustomError.internalServerError('internal server error');
      }
   
    }

    public checkStudentById = async(id:number) =>{
      try{
         const student = await prisma.students.findUnique(({
            where:{id:id}
         }))
         return student;
      }
      catch(err){
         throw CustomError.internalServerError('Internal Server Error');
      }
    }

    public createStudent = async (student:Student) =>{

      try{
         const existedStudent = await this.checkIfStudentExist(student);

         if(existedStudent){
            throw CustomError.badRequest('Student already exist');
         }
    
         const newStudent = await prisma.students.create({
            data:{
               first_name:student.first_name,
               last_name:student.last_name,
               email:student.email,
               phone:student.phone,
               gender:student.gender,
               direccion:student.direccion,
               parroquia:student.parroquia,
               asuntos_medicos:student.asuntos_medicos
            }
         })
         const {active,created_at,...studentEntity} = newStudent;
          return {...studentEntity};
      }
      catch(err){
         if(Util.isPrismaError(err,'P2002')){
            throw CustomError.badRequest('Email is already in use');
         }
         throw CustomError.wrap(err);
      }
    }

    public getAllStudents = async () =>{
      try{
       const students = await prisma.students.findMany({
        select:{
          ...studentListSelect,
          _count:{
            select:{Enrollments:true}
          }
        }
       })
       return students;
      }
      catch(err){
         throw CustomError.wrap(err);
      }
    }

    public getTotalStudents = async () =>{
      try{
        return await prisma.students.count();
      }
      catch(err){
         throw CustomError.wrap(err);
      }
    }

    public getAStudent = async (studentId:number) =>{
     try{
       const student = await this.checkStudentById(studentId);
      
       if(!student){
         throw CustomError.notFound('Student does not exist');
       }

       return student;

    }
     catch(error){
      throw CustomError.wrap(error);
     }
    }

    public deleteStudent = async (studentId:number) =>{
      try{
        const student = await this.checkStudentById(studentId);

        if(!student){
         throw CustomError.notFound('Student does not exist');
        }
       
        await prisma.$transaction([
         prisma.enrollments.deleteMany({where:{student_id:studentId}}),
         prisma.studentCourse.deleteMany({where:{student_id:studentId}}),
         prisma.students.delete({where:{id:studentId}})
        ])

        return {
         success:true,
         message:'Student has been deleted'
        }

      }
      catch(error){
         throw CustomError.wrap(error,'Could not delete student');
      }
    }

    public updateStudent = async (studentId:number,studentData:Student) =>{
      try{
        const student = await this.checkStudentById(studentId);

        if(!student){
         throw CustomError.notFound('Student does not exist');
        }
       
        const updatedStudent = await prisma.students.update({
         data:studentData,
         where:{id:studentId}
        })
      
        return {
         success:true,
         message:'Student has been updated',
         student:updatedStudent
        }

      }
      catch(error){
         if(Util.isPrismaError(error,'P2002')){
            throw CustomError.badRequest('Email is already in use');
         }
         throw CustomError.wrap(error);
      }
    }

  public  getFilterStudentCondition = (query:string):Prisma.StudentsWhereInput[] =>{
        if(query === filterConditionValues.Active) return [{active:true}];
        if(query === filterConditionValues.Inactive) return [{active:false}];

        return [
              { first_name: { contains: query, mode: 'insensitive' } },
              { last_name: { contains: query, mode: 'insensitive' } },
              { phone: { contains: query, mode: 'insensitive' } },
              { email: { contains: query, mode: 'insensitive' } },
        ];
    }
        private getSortedStudent= (sortBy:string):Prisma.StudentsOrderByWithRelationInput | undefined =>{

          if(!sortBy){
            return undefined;
          }
         const sortMapping: Record<string, Prisma.StudentsOrderByWithRelationInput> = {
            [filterConditionValues.Recent]: { created_at: Prisma.SortOrder.desc },
            [filterConditionValues.Oldest]: {created_at: Prisma.SortOrder.asc },
            [filterConditionValues.AZ]: {first_name: Prisma.SortOrder.asc },
            [filterConditionValues.ZA]: {first_name: Prisma.SortOrder.desc },
        };
    
        const normalizedSortBy = sortBy=== 'A to Z' ? filterConditionValues.AZ : 
                                 sortBy === 'Z to A' ? filterConditionValues.ZA: 
                                 sortBy;
    
        return sortMapping[normalizedSortBy] || undefined;
    }

    private getOrderClause = (sortBy:string):Prisma.StudentsOrderByWithRelationInput | Prisma.StudentsOrderByWithRelationInput[] | undefined =>{

         if (sortBy === filterConditionValues.MostCourses) {
             return [{ StudentCourses: { _count: Prisma.SortOrder.desc } }];
            } 
            
         if(sortBy === filterConditionValues.LeastCourses) {
            return [{ StudentCourses: { _count: Prisma.SortOrder.asc } }];

          } 
        return this.getSortedStudent(sortBy);
    }

    public searchStudent = async (studentQueryParams: StudentQueryParams) => {
      const {query,page,sortBy} = studentQueryParams;
      
      try {
        const skip = (page -1) * ITEMS_PER_PAGE;
        const filterCondition = this.getFilterStudentCondition(query);
        const orderByClause = this.getOrderClause(sortBy!);
            
        const students = await prisma.students.findMany({
           select:{
          ...studentListSelect,
          _count:{
            select:{StudentCourses:true}
          }
        },
         where: {
            OR:query!="All" ? filterCondition : undefined
          },
          orderBy: orderByClause,
           take:ITEMS_PER_PAGE,
           skip:skip
         })
         
         return students;
      } catch (error) {
        throw CustomError.wrap(error);
      }
    }

    public getStudentsSummary = async ():Promise<StudentsSummary> =>{
      try{
        const [total,active,inactive] = await Promise.all([
          prisma.students.count(),
          prisma.students.count({ where: { active: true } }),
          prisma.students.count({where:{active:false}})
        ])

       return{
        total,
        active,
        inactive
       }
      }
      catch(error){
         throw CustomError.wrap(error);
      }
    }

    private getStudentCourses = async(id:number) =>{
       try{
          const studentCourses = await prisma.studentCourse.findMany({
              where: {
                student_id: id,
              },
              select: {
                course: {
                  select: {
                    level: true,
                    name:true,
                  },
                },
                 student:{
                   select:{
                    gender:true
                   }
                 }
              },
              
            })
            return studentCourses;
       }
       catch(error){
        throw CustomError.wrap(error)
       }
    }

    private getStudentCoursesCount = async(id:number) =>{
       try{
          const studentCourses = await prisma.studentCourse.count(({where:{student_id:id}}))
          return studentCourses;
       }
       catch(error){
        throw CustomError.wrap(error)
       }
    }

    private getCoursesCompletedByLevel = (studentCourses:{course:{level:string}}[]) =>{
      
      const completedByLevel = Object.entries(
              studentCourses.reduce((acc, sc) => {
                const level = Util.formatCourseLevel(sc.course.level);
                acc[level] = (acc[level] || 0) + 1;
                return acc;
              }, {} as Record<string, number>)
            ).map(([level, count]) => ({ level, count }));
        
            return completedByLevel;
    }

    private getStudentGender = async (studentId:number) =>{ 
      return await prisma.students.findUnique({
             where: { id: studentId },
             select: { gender: true }
           });
    }

    public async getStudentProgress(id: number) {
      try {
        const [totalCourses, totalCoursesTaken, coursesByLevel, studentCourses] =
          await Promise.all([
            CourseServices.getTotalCourse(),
            this.getStudentCoursesCount(id),
            CourseServices.getCoursesByLevel(),
            this.getStudentCourses(id),
          ]);

          if (!studentCourses.length) {
            throw CustomError.notFound(`No courses found for student with id ${id}`);
          }

          const studentGender = studentCourses[0].student.gender;
          const excludedLevel =
            studentGender === "M" ? "Renacer Mujeres" : "Renacer Hombres";

          const completedByLevel = this.getCoursesCompletedByLevel(studentCourses);

          // Create a map for quick lookup of completed counts by level
          const completedMap = new Map(
            completedByLevel.map((c) => [c.level, c.count])
          );

          const coursesTakenByLevel = coursesByLevel.map((c) => ({
            level: c.level,
            courseLevelQuantity: c.courseLevelQuantity,
            coursesCompleted: completedMap.get(c.level) ?? 0,
          }));

          const filteredCoursesTakenByLevel = coursesTakenByLevel.filter(
            (c) => c.level !== excludedLevel
          );

          return {
            totalCourses,
            totalCoursesTaken,
            coursesTakenByLevel: filteredCoursesTakenByLevel,
          };
        } catch (error) {
          throw CustomError.wrap(error);
        }
      }

      public async getPendingCoursesList(id:number){
        try {
            const genderResult = await this.getStudentGender(id);
            const excludedLevelGender = genderResult?.gender === 'M' ? 'RENACER_MUJERES' : 'RENACER_HOMBRE';

            const courseIdsCompleted = await prisma.studentCourse.findMany({
              where: { student_id: id },
              select: { course_id: true },
            });
            const completedIds = courseIdsCompleted.map((c) => c.course_id);

            const pendingCourses = await prisma.courses.findMany({
              where: {
                id: { notIn: completedIds },
                level: { not: excludedLevelGender },
              },
              select: {
                id:true,
                name: true,
                description: true,
                level: true,
              },
            });

            return pendingCourses;

          } catch (error) {
            throw CustomError.wrap(error);
          }
      }

      public getEnrollCourseList = async(id:number) =>{
         try{
            const courseList = await prisma.studentCourse.findMany(({
              where:{student_id:id},
              select:{
                completedAt:true,
                course:{
                 select:{
                  id:true,
                  name:true,
                  description:true,
                  level:true
                 }
                }
              }
            }))

            const courseListFormatted = courseList.map((element)=>{
              return{
                id:element.course.id,
                name:element.course.name,
                description:element.course.description,
                level:element.course.level,
                completeAt:element.completedAt
              }
            })

          return courseListFormatted;
         }
         catch(error){
           throw CustomError.wrap(error);
         }
      }

    getStudentPagination = async () =>{
     try{
        const students = await prisma.students.count();
        const totalPages = Math.ceil(Number(students) / ITEMS_PER_PAGE);

      return{
        totalPages,
        totalCount:students
      }
     }
     catch(error){
      throw CustomError.wrap(error);
     }
    }

     addManualStudentCourses = async(studentId:number,courses:StudentCourse[]) =>{
      try{
        const studentExist = await this.checkStudentById(studentId);

        if(!studentExist){
          throw CustomError.notFound(`Student not found`);
        }
        const currentCourseIds = (await CourseServices.getCourseIds()).map((course)=> course.id);
        const completedStudentCoursesId = courses.map((course)=> course.course_id);
        
        const areCourseIdValid = completedStudentCoursesId.every((id)=> currentCourseIds.includes(id));
       
        if(!areCourseIdValid){
          throw CustomError.notFound(`Courses are invalid`);
        }

        // courses the student already has are skipped, so the count can be lower than courses.length
        await prisma.studentCourse.createMany({
          data:courses.map((course)=> {
            return{
              student_id:studentId,
              course_id:course.course_id,
              completedAt:course?.completedAt ?? null
            }
          }),
          skipDuplicates:true
        })
       
        return{
         success:true,
         message:'Courses were added succesfully'
        }
      }
     catch(error){
      throw CustomError.wrap(error);
     }
      
     }

     getAllStudentsWithNoCourses = async() =>{
      try{
         const students = await prisma.students.findMany(({
           where: {
             StudentCourses: {
              none: {}
           }},
           select:{
            id:true,
            first_name:true,
            last_name:true
           }
         }))

         return students
      }
      catch(error){
         throw CustomError.wrap(error);
      }
     }

       getAllStudentsWithPastSixMonthOfEnrollment = async () => {
         try {
           const sixMonthsAgo = new Date();
           sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

           const students = await prisma.students.findMany({
             where: {
               Enrollments: {
                 some: {
                   enrolled_at: {
                     lte: sixMonthsAgo
                   }
                 }
               },
               NOT: {
                 Enrollments: {
                   some: {
                     enrolled_at: {
                       gt: sixMonthsAgo
                     }
                   }
                 }
               }
             },
             select: {
               id: true,
               first_name: true,
               last_name: true,
               Enrollments: {
                 orderBy: { enrolled_at: 'desc' },
                 take: 1
               }
             }
           });

           return students;
         } catch (error) {
           throw CustomError.wrap(error);
         }
       }

      updateStudentCourseDate = async(studentCourse:StudentCourse) =>{
       const {student_id,course_id,completedAt} = studentCourse;
       const completedDate = new Date(completedAt!);
  
       try{
           if(Number.isNaN(completedDate.getTime())){
              throw CustomError.badRequest('Completed date is invalid');
           }

          const [studentExist,courseExist] = await Promise.all([this.checkStudentById(student_id!),CourseServices.checkCourseById(course_id)]);

           if(!studentExist){
              throw CustomError.notFound('Student does not exist');
           }

           if(!courseExist){
              throw CustomError.notFound('Course does not exist');
           }

           await prisma.studentCourse.update({
             where: {
               student_id_course_id: {
                 student_id: student_id!,
                 course_id: course_id
               }
             },
             data: {
               completedAt: completedDate
             }
           })
            return{
            success:true,
            message:'Course Date has been updated',
       }

        }
         
        catch (error) {
           if(Util.isPrismaError(error,'P2025')){
              throw CustomError.notFound('Student has not taken this course');
           }
           throw CustomError.wrap(error);
         }
      }
}
