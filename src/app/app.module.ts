import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  imports: [TasksModule], // todo modulo para ser ativado deve ser importado aqui
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
