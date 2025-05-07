import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { MyportfolioModule } from 'src/myportfolio/myportfolio.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project,]), MyportfolioModule], // Add your entities here
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule { }
