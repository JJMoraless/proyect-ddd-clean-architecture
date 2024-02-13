import { TodoEntity } from '../../entities'
import { TodoRepository } from '../../repositories'

export interface GetTodosUseCase {
  execute(): Promise<TodoEntity[]>
}

export class GetTodos implements GetTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async execute(): Promise<TodoEntity[]> {
    return await this.todoRepository.getAll()
  }
}
