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




  async findAll() {
    const projects = await this.projectRepository.find();
    if (projects.length === 0) {
      throw new Error("No projects found");
    }


    return projects.map((project) => {
      return {
        id: project.id,
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectLinks: project.projectLinks,
        techUsed: project.techUsed,
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }



  update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new Error("Project not found");
    }

    const updatedProject = this.projectRepository.update(id, updateProjectDto);
    // console.log("updatedProject", updatedProject);

    if (!updatedProject) {
      throw new Error("Error updating project");
    }
    return updatedProject.then(() => {
      return this.projectRepository.findOne({ where: { id } }).then((project) => {
        return {
          id: project?.id,
          projectName: project?.projectName,
          projectDescription: project?.projectDescription,
          projectLinks: project?.projectLinks,
          techUsed: project?.techUsed,
          message: "project updated successfully"
        };
      });
    })

  }




  remove(id: number) {
    const project = this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new Error("Project not found");
    }
    return this.projectRepository.delete(id).then(() => {
      return { message: "Project deleted successfully" };
    })
    // return `This action removes a #${id} project`; 
  }
}
