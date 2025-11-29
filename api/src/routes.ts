import { Router } from "express"

import UserController from "./controllers/UserController"

const routes = Router();
const userController = new UserController()

routes.get("/users", userController.getAll)
routes.get("/users/:id", userController.getById)
routes.post("/users", userController.create.bind(userController))
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.delete)

export default routes;
