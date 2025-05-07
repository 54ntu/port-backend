import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class About {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string


    @Column()
    image: string

}
