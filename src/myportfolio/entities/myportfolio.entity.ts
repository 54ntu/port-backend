import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Myportfolio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({ type: 'text', unique: true })
    email: string

    @Column()
    password: string
}
