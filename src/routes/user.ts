import { Router } from "express";
import { UserController } from "../controller";

const user = Router();

user.post("/cadastro", UserController.createUser);
user.get("/pegarUsuariosPorId/:id", UserController.getUserById);
user.get("/pegarUsuarios/", UserController.getAllUser);

export default user;
