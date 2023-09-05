import { Router } from "express";
import { ProcuradorController } from "../controller";
import { auth } from "../middleware/auth";

const procurador = Router();

procurador.use(auth);
procurador.post("/cadastro", ProcuradorController.postProcurador);
procurador.get("/pegarProcuradores", ProcuradorController.getAllProcuradores);
procurador.get("/pegarProcuradorPorId/:id", ProcuradorController.getProcuradorById);

export default procurador;
