import { compare, genSalt, hash } from 'bcryptjs';

const SALT_ROUNDS = 12;

export const bcryptAdapter = {
    hash: async (password:string) =>{
        const salt = await genSalt(SALT_ROUNDS);
        return hash(password,salt);
    },

    compare: (password:string,hashed:string) => {
     return compare(password,hashed);
    }
}