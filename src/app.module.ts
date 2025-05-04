import { Module } from '@nestjs/common';
import { MyportfolioModule } from './myportfolio/myportfolio.module';
import { ProjectModule } from './project/project.module';
import { AboutModule } from './about/about.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { SocialLinksModule } from './social-links/social-links.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Myportfolio } from './myportfolio/entities/myportfolio.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MyportfolioModule, ProjectModule, AboutModule, ContactMeModule, SocialLinksModule, ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: +(process.env.PORT || 5432),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Myportfolio,],
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
