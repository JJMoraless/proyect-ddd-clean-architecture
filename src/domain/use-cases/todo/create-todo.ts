import { CreateTodoDto } from '../../dtos'
import { TodoEntity } from '../../entities'
import { TodoRepository } from '../../repositories'

export interface CreateTodoUseCase {
  execute(dto: CreateTodoDto): Promise<TodoEntity>
}
export class CreateTodo implements CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(dto: CreateTodoDto): Promise<TodoEntity> {
    return await this.todoRepository.create(dto)
  }
}
