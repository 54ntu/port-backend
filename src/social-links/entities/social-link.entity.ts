import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class SocialLink {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    facebook: string

    @Column()
    linkedin: string

    @Column()
    github: string

}
