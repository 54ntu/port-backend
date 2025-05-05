import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DataSource } from "typeorm";
import { adminseeder } from "adminseeder";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule)
    const dataSource = app.get(DataSource)

    await adminseeder(dataSource)

    await app.close()
}

bootstrap();