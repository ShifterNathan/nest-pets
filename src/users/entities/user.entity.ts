import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cat } from "src/cats/entities/cat.entity";
import { Dog } from "src/dogs/entities/dog.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    role: string;

    @Column()
    profileImage: string;

    @OneToMany(type => Cat, cat => cat.User_id)
    Cats: Cat[];

    @OneToMany(type => Dog, dog => dog.User_id)
    Dogs: Dog[];
}