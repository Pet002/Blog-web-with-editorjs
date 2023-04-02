import { IsNotEmpty } from "class-validator";

export class LoginDto {

    @IsNotEmpty()
    /**
     * in passport is get username and password always
     * is mean when i use email to a unique, it must use username mean email*/ 
    username: string; 

    @IsNotEmpty()
    password: string;

}