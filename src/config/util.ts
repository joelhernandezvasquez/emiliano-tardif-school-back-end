import { Prisma } from "@prisma/client";

export class Util{

    static formatCourseLevel = (level:string) =>{
       return level
    .replace(/NIVEL_1_JESUS_ESTA_VIVO/, "Nivel 1 Jesus Esta Vivo")
    .replace(/NIVEL_2_JESUS_NOS_CAPACITA/, "Nivel 2 Jesus Nos Capacita")
    .replace(/NIVEL_3_JESUS_NOS_ENVIA/, "Nivel 3 Jesus Nos Envía")
    .replace(/RENACER_MUJERES/, "Renacer Mujeres")
    .replace(/RENACER_HOMBRE/, "Renacer Hombres")
    .replace(/RENACER_PAREJAS/, "Renacer Parejas");
}

    static isPrismaError = (error:unknown,code:string) =>{
       return error instanceof Prisma.PrismaClientKnownRequestError && error.code === code;
    }
}
