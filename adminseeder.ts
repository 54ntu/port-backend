import { IsEmail } from "class-validator"
import { Myportfolio } from "src/myportfolio/entities/myportfolio.entity"
import { DataSource } from "typeorm"

export const adminseeder = async (dataSource: DataSource) => {
    const repo = dataSource.getRepository(Myportfolio)
    const existingAdmin = await repo.findOneBy({ email: process.env.EMAIL })

    if (!existingAdmin) {
        const admin = repo.create({
            name: process.env.USERNAME,
            email: process.env.EMAIL,
            password: process.env.PASSWORD,

        })

        await repo.save(admin)
        console.log("Admin created")
    }
    else {
        console.log("Admin already exists")
    }
}

