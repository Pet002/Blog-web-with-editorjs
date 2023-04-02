import { IsNotEmpty } from "class-validator";

export class CreateBlogDto {
    
    @IsNotEmpty({message: "You should add a topic in this blog"})
    topic : string;

    @IsNotEmpty({message: "You should add a detail in this blog"})
    detail: string;

}