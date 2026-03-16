import 'dotenv/config';
import { get } from 'env-var';

export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  JWT_SEED: get('JWT_SEED').required().asString(),
  DATABASE_URL: get('DATABASE_URL').required().asString(),
  API_URL: get('API_URL').required().asString(),
  CORS_ORIGINS: get('CORS_ORIGINS')
    .default('http://localhost:3000,https://cscv-school-9r8w1u9qs-joelhernandezvasquezs-projects.vercel.app,https://www.cscvbrooklyn.com')
    .asString(),

}



