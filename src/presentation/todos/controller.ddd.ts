import { Request, Response } from 'express'
import { CreateTodoDto, TodoRepository, UpdateTodoDto } from '../../domain'
import {
  CreateTodo,
  DeleteTodo,
  GetTodo,
  GetTodos,
  UpdateTodo,
} from '../../domain/use-cases'

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {}

  public getTodos = (req: Request, res: Response) => {
    new GetTodos(this.todoRepository)
      .execute()
      .then((todos) => res.status(200).json(todos))
      .catch((error) => res.status(404).json({ error }))
  }

  public getTodoById = (req: Request, res: Response) => {
    new GetTodo(this.todoRepository)
      .execute(Number(req.params.id))
      .then((todo) => res.status(200).json(todo))
      .catch((error) => res.status(404).json({ error }))
  }

  public createTodo = (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body)
    if (error) return res.status(400).json({ message: error })
    new CreateTodo(this.todoRepository)
      .execute(createTodoDto!)
      .then((todo) => res.status(201).json(todo))
      .catch((error) => res.status(400).json({ error }))
  }

  public updateTodo = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id })
    if (error) return res.status(400).json({ error })
    new UpdateTodo(this.todoRepository)
      .execute(updateTodoDto!)
      .then((todo) => res.status(200).json(todo))
      .catch((error) => res.status(400).json({ error }))
  }

  public deleteTodo = (req: Request, res: Response) => {
    const idTodo = Number(req.params.id)
    new DeleteTodo(this.todoRepository)
      .execute(idTodo)
      .then((todo) => res.status(200).json(todo))
      .catch((error) => res.status(400).json({ error }))
  }
}
