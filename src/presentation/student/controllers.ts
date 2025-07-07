import { Request,Response } from "express";
import { StudentServices } from "../services/student.service";
import { CustomError } from "../../domain/errors/custom.error";
import { Student } from "../interfaces/student.interface";

export class StudentController{

    constructor(public readonly studentService:StudentServices){}

        private handleError = (error:unknown,res:Response) =>{
          
           if(error instanceof CustomError){
             return res.status(error.statusCode).json({error:error.message})
           }
           console.log(`${error}`);
           return res.status(500).json({error:'Internal Server Error'});
        }

    createStudent = (req:Request,res:Response) =>{
      const studentData: Student= {
         first_name: req.body.first_name.trim(),
         last_name: req.body.last_name.trim(),
         email: req.body.email.trim().toLowerCase(),
         phone: req.body.phone.trim(),
         gender: req.body.gender,
         direccion: req.body.direccion?.trim(),
         parroquia: req.body.parroquia?.trim(),
         asuntos_medicos: req.body.asuntos_medicos?.trim()
       };
       
     this.studentService.createStudent(studentData)
     .then((student) => res.json(student))
     .catch(error => this.handleError(error,res))
    }

    getAllStudents = (req:Request,res:Response) =>{
     this.studentService.getAllStudents()
     .then((students)=> res.json(students))
     .catch((error) => this.handleError(error,res))
    }

    getStudent = (req:Request,res:Response) =>{
      const{id} = req.params;
      
      this.studentService.getAStudent(parseInt(id))
      .then((student)=> res.json(student))
      .catch((error)=> this.handleError(error,res));
    }

    updateStudent = (req:Request,res:Response) =>{
      const {id} = req.params;
      const studentData: Student = {
        first_name: req.body.first_name.trim(),
        last_name: req.body.last_name.trim(),
        email: req.body.email.trim().toLowerCase(),
        phone: req.body.phone.trim(),
        gender: req.body.gender,
        direccion: req.body.direccion?.trim(),
        parroquia: req.body.parroquia?.trim(),
        asuntos_medicos: req.body.asuntos_medicos?.trim()
      };

      this.studentService.updateStudent(parseInt(id),studentData)
      .then((updatedStudent)=> res.json(updatedStudent))
      .catch((error) => this.handleError(error,res))
    }

    deleteStudent = (req:Request,res:Response) =>{
       const {id} = req.params;
       this.studentService.deleteStudent(parseInt(id))
       .then((student)=> res.json(student))
       .catch((error)=> this.handleError(error,res))
    }

    searchStudent = (req:Request,res:Response) =>{
      const {q} = req.query;
       this.studentService.searchStudent(q as string)
       .then((students)=> res.json(students))
       .catch((error)=> this.handleError(error,res))
    }

    getSummary = (req:Request,res:Response) => {
      console.log('endpoint called');
      this.studentService.getStudentsSummary()
      .then((students)=> res.json(students))
      .catch((error)=> this.handleError(error,res))
    }
}