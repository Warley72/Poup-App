import { Router } from "express"

import UserController from "../src/controllers/UserController"

const routes = Router();
const userController = new UserController();

routes.get("/users", userController.getAll);
routes.get("/users/id", userController.getById);
routes.post("/users", userController.create)
routes.put("/users", userController.update)
routes.delete("/users", userController.delete)

export default routes;
