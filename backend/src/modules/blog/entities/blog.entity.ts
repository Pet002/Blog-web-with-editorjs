import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "blogs"})
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    topic: string;

    @Column()
    detail: string;
    
}