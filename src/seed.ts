import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DataSource } from "typeorm";
import { Myportfolio } from "./myportfolio/entities/myportfolio.entity";
import * as bcrypt from "bcrypt";
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {

    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const username = process.env.USERNAME;

    if (!email || !password || !username) {  //this one is for type safety
        throw new Error("EMAIL, PASSWORD, or USERNAME not defined in environment");
    }
    const app = await NestFactory.createApplicationContext(AppModule)
    const dataSource = app.get(DataSource)

    const userRepo = dataSource.getRepository(Myportfolio)
    const adminExists = await userRepo.findOne({ where: { email: process.env.EMAIL } })

    if (!adminExists) {
        const hashedPassword = await bcrypt.hash(password, 10)
        const adminUser = userRepo.create({
            email: process.env.EMAIL,
            password: hashedPassword,
            name: process.env.USERNAME

        })

        await userRepo.save(adminUser)
        console.log("Admin user created")

    }
    else {
        console.log("Admin user already exists")

    }

    await app.close()
    process.exit(0)
}


bootstrap();