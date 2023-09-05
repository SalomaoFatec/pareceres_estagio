import { Router } from "express";
import { ProcuradoriaController } from "../controller";
import { auth } from "../middleware/auth";

const procuradoria = Router();

procuradoria.use(auth);
procuradoria.post("/cadastro", ProcuradoriaController.postProcuradoria);
procuradoria.get("/pegarProcuradorias", ProcuradoriaController.getAllProcuradorias);
procuradoria.get("/pegarProcuradoriaPorId/:id", ProcuradoriaController.getProcuradoriaById);

export default procuradoria;
