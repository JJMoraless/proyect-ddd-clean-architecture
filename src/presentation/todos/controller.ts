import { Request, Response } from 'express'
import { prisma } from '../../data/postgres'
import { CreateTodoDto, TodoRepository, UpdateTodoDto } from '../../domain'

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {}

  public getTodos = async (req: Request, res: Response) => {
    const todos = await this.todoRepository.getAll()
    res.status(200).json(todos)
  }

  public getTodoById = async (req: Request, res: Response) => {
    try {
      const todo = await this.todoRepository.findById(Number(req.params.id))
      res.status(200).json(todo)
    } catch (error) {
      res.status(404).json({ error })
    }
  }

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body)
    if (error) return res.status(400).json({ message: error })
    const todo = await this.todoRepository.create(createTodoDto!)
    res.status(201).json(todo)
  }

  public updateTodo = async (req: Request, res: Response) => {
    const idTodo = Number(req.params.id)
    const [error, updateTodoDto] = UpdateTodoDto.create({
      ...req.body,
      ...{ id: idTodo },
    })
    if (error) return res.status(400).json({ error })
    const updatedTodo = await this.todoRepository.updateById(updateTodoDto!)
    res.status(200).json(updatedTodo)
  }

  public deleteTodo = async (req: Request, res: Response) => {
    const idTodo = Number(req.params.id)
    const deletedTodo = await this.todoRepository.deleteById(idTodo)
    res.status(200).json(deletedTodo)
  }
}
