import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from '../services/blog.service';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { Blog } from '../entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create')
  async CreateBlog(@Body() blogData : CreateBlogDto){
    return await this.blogService.createBlog(blogData);
  }

  @Get('/')
  async getAllBlog(): Promise<Blog[]>{
    return await this.blogService.getAllBlog()
  }
}
