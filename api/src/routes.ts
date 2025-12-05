import { Router } from "express"

import UserController from "./controllers/UserController"
import ExpenseController from "./controllers/ExpenseController"

const routes = Router();
const userController = new UserController()
const expenseController = new ExpenseController()

routes.get("/users", userController.getAll)
routes.get("/users/:id", userController.getById)
routes.post("/users", userController.create.bind(userController))
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.delete)

routes.get("/expense", expenseController.getAll)
routes.get("/expense/:id", expenseController.getById)
routes.post("/expense", expenseController.create)
routes.put("/expense/:id", expenseController.update)
routes.delete("/expense/:id", expenseController.delete)

export default routes;
