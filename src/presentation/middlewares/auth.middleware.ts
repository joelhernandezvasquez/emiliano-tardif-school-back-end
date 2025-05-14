import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../data/postgres";

export class AuthMiddleware{
    
    static async validateJWT(req:Request,res:Response,next:NextFunction){
        const authorization = req.header('Authorization');

        if(!authorization) return res.status(401).json({error:'No Token Provided'});

        if(!authorization.startsWith("Bearer ")) return res.status(401).json({error:'Invalid Bearer Token'})
        
        const token = authorization.split(' ').at(1) || '';

        try{
            const payload = await JwtAdapter.validateToken<{id:string}>(token);

            if(!payload) return res.status(401).json({error:'Invalid Token'})
            
           
            const user = await prisma.users.findFirst({
                where:{id:parseInt(payload.id)}
            })

            if(!user) return res.status(401).json({error:'Invalid token - user'})

            req.body.user = user;
            next();
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error:'Internal Server Error'});
        }
    }
}