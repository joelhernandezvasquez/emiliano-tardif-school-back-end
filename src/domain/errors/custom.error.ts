
export class CustomError extends Error{
    
    constructor(
        public readonly statusCode:number,
        public readonly message:string
    ){
        super(message);
    }

    static badRequest(message:string){
        return new CustomError(400,message)
    }
    static unauthorized(message:string){
        return new CustomError(401,message)
    }

    static forbidden(message:string){
        return new CustomError(403,message);
    }

    static notFound(message:string){
        return new CustomError(404,message)
    }

    static internalServerError(message:string){
        return new CustomError(500,message);
    }

    // keeps CustomErrors thrown by a service as they are and hides anything else behind a generic 500
    static wrap(error:unknown,message:string = 'Internal Server Error'){
        if(error instanceof CustomError) return error;
        console.log(error);
        return CustomError.internalServerError(message);
    }
}