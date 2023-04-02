import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from '../entities/blog.entity';
import { Repository } from 'typeorm';
import { CreateBlogDto } from '../dto/create-blog.dto';

@Injectable()
export class BlogService {

    constructor(
        @InjectRepository(Blog) private blogRepo : Repository<Blog>
    ){}

    async getAllBlog(): Promise<Blog[]>{
        return await this.blogRepo.find();
    }

    async getBlogByID(id : number): Promise<Blog>{
        return await this.blogRepo.findOne({
            where: {id}
        })
    }

    async createBlog(blog: CreateBlogDto){
        return await this.blogRepo.save(blog);
    }
}
