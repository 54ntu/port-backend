import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ContactMe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column()
    message: string;

    @Column()
    Phone: string;

    @CreateDateColumn()
    createdAt: Date;
}
