import { IsString, MinLength } from 'class-validator';

/*
 * DTO > Data Transfer Object(Objeto de transferencia de dados)
 * Server também para: valdiar dados, transformar dados
 * Diferente de uma entidade ou interface exemplo:
 *  id: number;
    name: string;
    description: string;
    completed: boolean;

    aqui nesta entidade tem id, e não recebemos id do cliente para criar dados
    ai que entra o DTO.
 */
export class CreateTaskDto {
  // Validation só funciona no controller
  @IsString({ message: 'name precisa ser string' })
  @MinLength(5, { message: 'name precisa pelo menos 5 caracteres' })
  readonly name: string;

  @IsString({ message: 'description precisa ser string' })
  @MinLength(10, { message: 'description precisa pelo menos 10 caracteres' })
  readonly description: string;
}
