import { DataBaseSource } from "./config/database";
import express from "express";
import cors from "cors";
import router from "./routes/";
import { generate } from "./controller/generate";
import { User } from "./models/index";

const app = express();
const usuarioRepository = DataBaseSource.getRepository(User);

try {
  DataBaseSource.initialize()
    .then ( async () => {
    const usuarioInicial = await usuarioRepository.findOne({
      where: {
        email: "admin@prefeitura.sjc.com.br"
      },
    })
    if (!usuarioInicial) {
      generate()
    }
    console.log(usuarioInicial)
    console.log("Banco conectado com sucesso")})
    .catch(({ err }) => {
      console.log(err);
    });
} catch (error) {
  console.log(error);
}

app.use(express.json({ limit: '10mb' }));

app.use(cors());
app.use(router);

app.listen(5000, () => console.log("Server conectado"));
