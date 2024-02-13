import { UpdateTodoDto } from '../../dtos'
import { TodoEntity } from '../../entities'
import { TodoRepository } from '../../repositories'

export interface DeleteTodoUseCase {
  execute(id: number): Promise<TodoEntity>
}

export class DeleteTodo implements DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(id: number): Promise<TodoEntity> {
    return await this.todoRepository.deleteById(id)
  }
}
