import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  //DATABASE
  //API
  API_PORT: get('API_PORT').default(3000).asPortNumber(),
 }
