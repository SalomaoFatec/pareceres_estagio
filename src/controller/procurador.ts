import { Request, Response, NextFunction } from "express";
import { DataBaseSource } from "../config/database";
import { Parecer, Procurador } from "../models/index";

const procuradorRepository = DataBaseSource.getRepository(Procurador);

class ProcuradorController {
  public async postProcurador(req: Request, res: Response, next: NextFunction) {
    const { nome, email} = req.body;
    try {
      const create_procurador = procuradorRepository.create({
        nome: nome,
        email: email,
      });

      await procuradorRepository.save(create_procurador);
      return res
        .status(201)
        .json({ ok: `Cadastro do procurador '${nome}' feito com sucesso` });
    } catch (error) {
      return res.status(406).json({ error: error });
    }
  }

  public async getProcuradorById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const getById = await procuradorRepository
        .createQueryBuilder("procurador")
        .where("procurador.procurador_id = :id", { id: id })
        .getOne();
      res.json(getById);
    } catch (error) {
      res.json(error);
    }
  }

  public async getAllProcuradores(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllProcuradores = await procuradorRepository
        .createQueryBuilder("procurador")
        .getMany();
      res.json(this.getAllProcuradores);
    } catch (error) {
      res.json(error);
    }
  }
}
export default new ProcuradorController();