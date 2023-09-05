import { Request, Response, NextFunction } from "express";
import { DataBaseSource } from "../config/database";
import { Procuradoria } from "../models/index";

const procuradoriaRepository = DataBaseSource.getRepository(Procuradoria);

class ProcuradoriaController {
  public async postProcuradoria(req: Request, res: Response, next: NextFunction) {
    const { nome_procuradoria} = req.body;
    try {
      const create_procuradoria = procuradoriaRepository.create({
        nome_procuradoria: nome_procuradoria,
      });

      await procuradoriaRepository.save(create_procuradoria);
      return res
        .status(201)
        .json({ ok: `Cadastro da '${nome_procuradoria}' feito com sucesso` });
    } catch (error) {
      return res.status(406).json({ error: error });
    }
  }

  public async getProcuradoriaById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const getById = await procuradoriaRepository
        .createQueryBuilder("parecer")
        .where("procuradoria.procuradoria_id = :id", { id: id })
        .getOne();
      res.json(getById);
    } catch (error) {
      res.json(error);
    }
  }

  public async getAllProcuradorias(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllProcuradorias = await procuradoriaRepository
        .createQueryBuilder("parecer")
        .getMany();
      res.json(getAllProcuradorias);
    } catch (error) {
      res.json(error);
    }
  }
}
export default new ProcuradoriaController();