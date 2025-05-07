import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    projectName: string;

    @Column()
    projectDescription: string;

    @Column()
    projectLinks: string;

    @Column()
    techUsed: string[]
}
