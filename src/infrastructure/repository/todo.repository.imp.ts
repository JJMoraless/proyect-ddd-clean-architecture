import {
  CreateTodoDto,
  TodoDataSource,
  TodoEntity,
  TodoRepository,
  UpdateTodoDto,
} from '../../domain'

export class TodoRepositoryImp implements TodoRepository {
  constructor(private readonly dataSource: TodoDataSource) {}

  create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.dataSource.create(createTodoDto)
  }
  getAll(): Promise<TodoEntity[]> {
    return this.dataSource.getAll()
  }
  findById(id: number): Promise<TodoEntity> {
    return this.dataSource.findById(id)
  }
  updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    return this.dataSource.updateById(updateTodoDto)
  }
  deleteById(id: number): Promise<TodoEntity> {
    return this.dataSource.deleteById(id)
  }
}
