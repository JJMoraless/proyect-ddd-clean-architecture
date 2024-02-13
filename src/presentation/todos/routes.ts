import { Router } from 'express'
import { TodosController } from './controller.ddd'
import { TodoDataSourceImpl, TodoRepositoryImp } from '../../infrastructure'

const dataSource = new TodoDataSourceImpl()
const todoRepository = new TodoRepositoryImp(dataSource)

const router = Router()
export class TodoRoutes {
  static get routes(): Router {
    const todoController = new TodosController(todoRepository)
    router.get('/', todoController.getTodos)
    router.get('/:id', todoController.getTodoById)
    router.post('/', todoController.createTodo)
    router.put('/:id', todoController.updateTodo)
    router.delete('/:id', todoController.deleteTodo)
    return router
  }
}
