import {Pool} from 'pg';
import config from '/config/config'

const databaseConfig = {connectionString:config.databaseUri}
const pool = new Pool(databaseConfig)
export default pool;