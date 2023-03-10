import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    tittle: string;
    
    @Column()
    body: string;

    @Column()
    category: string;

    
    @Column()
    image: string;
}