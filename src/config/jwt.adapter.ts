import jwt from 'jsonwebtoken';
import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter{

    static async generateToken(payload:any,duration:string = '1m'){
        return new Promise((resolve)=>{
            jwt.sign(payload,JWT_SEED,{expiresIn: duration as jwt.SignOptions['expiresIn']},(err,token)=>{
                if(err) return resolve(null)
                resolve(token)
            })
        })
    }

    static validateToken<T>(token:string):Promise<T | null>{
        return new Promise((resolve)=>{
          jwt.verify(token,JWT_SEED,(err,decoded)=>{
            if(err) return resolve(null);
            resolve(decoded as T);
          })
        })
    }

    static decodeTokenExpiration(token:string):number | null {
        const decoded = jwt.decode(token) as { exp?: number };
        const expiresAt = decoded?.exp ?? null;
        return expiresAt;
    }
}