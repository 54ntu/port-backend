import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) { }
  // constructor(private readonly projectRepository: Repository<Project>) { }
  async create(createProjectDto: CreateProjectDto) {
    try {
      // console.log("createProjectDto", createProjectDto);
      const newProject = this.projectRepository.create(createProjectDto);
      return this.projectRepository.save(newProject);
    } catch (error) {
      throw new Error("Error creating project: " + error.message);

    }
  }




  findAll() {
    return `This action returns all project`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
