import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // In this case is mean Start a Repository of this table
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
