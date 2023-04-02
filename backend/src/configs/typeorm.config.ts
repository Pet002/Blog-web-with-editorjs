import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Blog } from "src/modules/blog/entities/blog.entity";
import { User } from "src/modules/user/entities/user.entity";


// To use .env file from source code
require('dotenv').config()

export const typeOrmConfig: TypeOrmModuleOptions = {
    type:'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Blog, User],
    synchronize:true,
}