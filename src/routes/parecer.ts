import { Router } from "express";
import { ParecerController } from "../controller";
import { auth } from "../middleware/auth";

const parecer = Router();


parecer.post("/cadastro", ParecerController.postParecer);
parecer.get("/pegarPareceres/", ParecerController.getAllPareceres);
parecer.get("/pegarParecerPorId/:id", ParecerController.getParecerById);
parecer.get("/pegarParecerPorAutor/", ParecerController.getParecerByAuthor);
parecer.get("/pegarParecerPorEmenta/", ParecerController.getParecerByEmenta);
parecer.get("/pegarParecerPeloNumero/", ParecerController.getParecerByNumber);

export default parecer;
