import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: TaskEntity[] = [];
  findAll(limit: number = 10, offset: number = 0) {
    return this.tasks;
  }

  findOne(id: number) {
    const task = this.tasks.find((task) => task.id === Number(id));

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada!');
    }
  }

  create(createTaskDto: CreateTaskDto) {
    const id = this.tasks.length + 1;
    const newData = {
      ...createTaskDto,
      id,
      completed: false,
    };
    this.tasks.push(newData);
    return this.tasks[this.tasks.length - 1];
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException('Tarefa não existe!');
    }

    const task = (this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    });

    return task;
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException('Tarefa não existe!');
    }

    this.tasks.splice(taskIndex, 1); // 1 indica apenas o primeiro item encontrado

    return `Tarefa ${id} deletada com sucesso.`;
  }
}
