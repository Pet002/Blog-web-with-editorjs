import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "blogs"})
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    topic: string;

    @Column()
    detail: string;
    
    // @ManyToOne(() => User, user => user.blog)
    // user: User;

}