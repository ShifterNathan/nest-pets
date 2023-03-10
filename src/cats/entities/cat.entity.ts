import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
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

    @ManyToOne(type => User, user => user.Cats, {eager: true})
    User_id: string;
}