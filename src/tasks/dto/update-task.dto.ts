// import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateTaskDto } from './create-task.dto'; // Ensure this path is correct and CreateTaskDto is exported properly
import { PartialType } from '@nestjs/mapped-types';

// export class UpdateTaskDto {
//   @IsString()
//   @IsOptional()
//   readonly name?: string;

//   @IsString()
//   @IsOptional()
//   readonly description?: string;

//   @IsBoolean({ message: 'completed precisa ser um boleano' })
//   @IsOptional()
//   readonly completed?: boolean;
// }

// com partial mesmo extendendo da class onde campos são obrigatorio, aqui ficam opcional
// usando PartiaType()
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsBoolean({ message: 'completed precisa ser um boleano' })
  @IsOptional()
  readonly completed?: boolean;
}
