import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [
    // config database add sync to a database
    TypeOrmModule.forRoot(typeOrmConfig),
    // add env to all service and modules
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule, UserModule, BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
