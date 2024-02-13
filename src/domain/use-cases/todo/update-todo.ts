import { UpdateTodoDto } from '../../dtos'
import { TodoEntity } from '../../entities'
import { TodoRepository } from '../../repositories'

export interface UpdateTodoUseCase {
  execute(dto: UpdateTodoDto): Promise<TodoEntity>
}

export class UpdateTodo implements UpdateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(dto: UpdateTodoDto): Promise<TodoEntity> {
    return await this.todoRepository.updateById(dto)
  }
}
