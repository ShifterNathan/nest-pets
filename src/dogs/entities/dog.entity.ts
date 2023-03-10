import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dog {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    owner: string;

    @Column()
    color: string;

    @ManyToOne(type => User, user => user.Dogs, {eager: true})
    User_id: string;
}