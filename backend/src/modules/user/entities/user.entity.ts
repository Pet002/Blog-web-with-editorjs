import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Blog } from "src/modules/blog/entities/blog.entity";


@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique:true
    })
    username: string;

    @Column()
    password: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        type:'boolean'
    })
    isActive:boolean;

    // Encrypt password before add a new user
    @BeforeInsert()
    async setPassword(password:string){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }

    // @OneToMany(() => Blog, (blog) => blog.user)
    // blog: Blog;

}
