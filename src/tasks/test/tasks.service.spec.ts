import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Deve criar uma tarefa', () => {
    const given = {
      name: 'abc',
      description: 'short',
    };
    expect(service.create(given)).toEqual({
      completed: false,
      description: 'short',
      id: 1,
      name: 'abc',
    });
  });

  it('Deve listar todas as tarefas', () => {
    console.log(service.findAll());
    expect(service.findAll()).toEqual([]);
  });

  it('Deve atualizar uma tarefa', () => {
    const given = { name: 'foo', description: 'alguma coisa' };
    expect(service.update('1', given)).toEqual(
      'Atualização realizada com sucesso: {"name":"foo","description":"alguma coisa"} criado com sucesso}',
    );
  });

  it('Deve deletar uma tarefa', () => {
    expect(service.delete('1')).toEqual('Tarefa 1 deletada com sucesso.');
  });
});
