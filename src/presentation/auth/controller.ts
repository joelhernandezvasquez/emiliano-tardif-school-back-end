import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { CustomError } from "../../domain/errors/custom.error";

export class AuthController {
    
    constructor(public readonly authService:AuthService){}

    private handleError = (error:unknown,res:Response) =>{
       if(error instanceof CustomError){
         return res.status(error.statusCode).json({error:error.message})
       }
       console.log(`${error}`);
       return res.status(500).json({error:'Internal Server Error'});
    }


    login = (req:Request,res:Response) =>{
      const {email,password} = req.body;

      this.authService.loginUser({email,password})
      .then((user) => res.json(user))
      .catch(error => this.handleError(error,res))
    }

    register = (req:Request,res:Response) =>{
      const {email,password} = req.body;

      this.authService.registerUser({email,password})
      .then((user) => res.json(user))
      .catch(error => this.handleError(error,res))
    }

}