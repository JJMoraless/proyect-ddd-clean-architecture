import { TodoEntity } from '../entities'
import { CreateTodoDto, UpdateTodoDto } from '../dtos'

export abstract class TodoDataSource {
  abstract create(createTodoDto: CreateTodoDto): Promise<TodoEntity>
  abstract getAll(): Promise<TodoEntity[]>
  abstract findById(id: number): Promise<TodoEntity>
  abstract updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity>
  abstract deleteById(id: number): Promise<TodoEntity>
}
