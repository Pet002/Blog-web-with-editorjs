import { Injectable } from '@nestjs/common';
import { typeOrmConfig } from './configs/typeorm.config';

@Injectable()
export class AppService {
  getHello(): any {
    return typeOrmConfig;
  }
}
