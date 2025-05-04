import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Myportfolio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({ type: 'text', unique: true })
    email: string

    @Column()
    phone: string

    @Column()
    password: string
}
