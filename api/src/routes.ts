import { Router } from "express"

import UserController from "./controllers/UserController";
import SalaryController from "./controllers/SalaryController";
import ExpenseController from "./controllers/ExpenseController";
import CategoryController from "./controllers/CategoryController";

const routes = Router();

const userController = new UserController()
const salaryController = new SalaryController()
const expenseController = new ExpenseController()
const categoryController = new CategoryController()


routes.get("/users", userController.getAll)
routes.get("/users/:id", userController.getById)
routes.post("/users", userController.create.bind(userController))
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.delete)

routes.get("/salary", salaryController.getAll)
routes.get("/salary/:id", salaryController.getById)
routes.post("/salary", salaryController.create)
routes.put("/salary/:id", salaryController.update)
routes.delete("/salary/:id", salaryController.delete)

routes.get("/expense", expenseController.getAll)
routes.get("/expense/:id", expenseController.getById)
routes.post("/expense", expenseController.create)
routes.put("/expense/:id", expenseController.update)
routes.delete("/expense/:id", expenseController.delete)

routes.get("/category", categoryController.getAll)
routes.get("/category/:id", categoryController.getById)
routes.post("/category", categoryController.create)
routes.put("/category/:id", categoryController.update)
routes.delete("/category/:id", categoryController.delete)

export default routes;
