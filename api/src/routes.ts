import { Router } from "express"

import UserController from "./controllers/UserController";
import RevenuesController from "./controllers/RevenuesController";
import ExpenseController from "./controllers/ExpenseController";
import CategoryController from "./controllers/ExpenseCategoryController";

const routes = Router();

const userController = new UserController()
const revenuesController = new RevenuesController()
const expenseController = new ExpenseController()
const categoryController = new CategoryController()

routes.get("/users", userController.getAll)
routes.get("/users/:id", userController.getById)
routes.post("/users", userController.create.bind(userController))
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.delete)

routes.get("/revenues", revenuesController.getAll)
routes.get("/revenues/:id", revenuesController.getById)
routes.post("/revenues", revenuesController.create)
routes.put("/revenues/:id", revenuesController.update)
routes.delete("/revenues/:id", revenuesController.delete)

routes.get("/expense", expenseController.getAll)
routes.get("/expense/:id", expenseController.getById)
routes.post("/expense", expenseController.create)
routes.put("/expense/:id", expenseController.update)
routes.delete("/expense/:id", expenseController.delete)

routes.get("/expenseCategory", categoryController.getAll)
routes.get("/expenseCategory/:id", categoryController.getById)
routes.post("/expenseCategory", categoryController.create)
routes.put("/expenseCategory/:id", categoryController.update)

export default routes;
