import { DataBaseSource } from "../config/database";
import {
  Procuradoria,
  User,
} from "./../models/index";

const usuarioRepository = DataBaseSource.getRepository(User);
const procuradoriaRepository = DataBaseSource.getRepository(Procuradoria);


export const generate = async () => {
  try {
    console.log("Dados gerados com sucesso");

    // Criando dados

    await usuarioRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          nome: "Usuario 1",
          email: "admin@prefeitura.sjc.com.br",
          senha: "123",
          tipoUsuario: 1,
        },
      ])
      .execute();

      await procuradoriaRepository
      .createQueryBuilder()
      .insert()
      .into(Procuradoria)
      .values([
        {
          nome_procuradoria: "TRABALHISTA - TB",
        },
        {
          nome_procuradoria: "FISCAL E TRIBUTÁRIA - PFT",
        },
        {
          nome_procuradoria: "JUDICIAL DA CIDADE"
        },
        {
          nome_procuradoria: "PJU-CIDADE"
        },
        {
          nome_procuradoria: "SEC (EDUCAÇÃO)"
        },
        {
          nome_procuradoria: "SS (SAÚDE)",
        },
        {
          nome_procuradoria: "PUI (PATRIMÔNIO E IMOBILIÁRIO)",
        },
        {
          nome_procuradoria: "PROCON",
        },
        {
          nome_procuradoria: "GAPR (GRUPO DE APOIO AO PROCESSO RELEVANTE)",
        },
        {
          nome_procuradoria: "MP (MINISTÉRIO PÚBLICO)"
        },
        {
          nome_procuradoria: "TC (TRIBUNAL DE CONTAS)"
        },
        {
          nome_procuradoria: "PROCURADORIA CONSULTIVA ADMINISTRATIVA"
        }
      ])
      .execute();

  } catch (error) {
    console.log("Erro ao gerar dados");
  }
};
