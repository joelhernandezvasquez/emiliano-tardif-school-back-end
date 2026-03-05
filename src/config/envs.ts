import 'dotenv/config';
import { get } from 'env-var';

export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  JWT_SEED: get('JWT_SEED').required().asString(),
  DATABASE_URL: get('DATABASE_URL').required().asString(),
  API_URL: get('API_URL').required().asString(),

}



