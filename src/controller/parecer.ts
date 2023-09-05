import { Request, Response, NextFunction } from "express";
import { DataBaseSource } from "../config/database";
import { Parecer } from "../models/index";

const parecerRepository = DataBaseSource.getRepository(Parecer);

class ParecerController {
  public async postParecer(req: Request, res: Response, next: NextFunction) {  
    try {
      req.body.map((parecer: Parecer) => {
        const { tombo, autor, data, ementa, procuradoria, orientacao_juridica, numero_parecer, numero_processo, anexo } = parecer;
        const create_parecer = parecerRepository.create({
          tombo: tombo || "",
          autor: autor || "",
          data: data || new Date().toISOString(),
          ementa: ementa || "", 
          procuradoria: procuradoria || "",
          orientacao_juridica: orientacao_juridica || "",
          numero_parecer: numero_parecer || "",
          numero_processo: numero_processo || "",
          anexo: anexo || "",
        });
        parecerRepository.save(create_parecer);
      });
      //await parecerRepository.save(create_parecer);
      return res
        .status(201)
        .json({ ok: `Cadastro do parecer feito com sucesso` });
    } catch (error) {
      return res.status(406).json({ error: error });
    }
  }
  

  public async getParecerById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const getById = await parecerRepository
        .createQueryBuilder("parecer")
        .where("parecer.parecer_id = :id", { id: id })
        .getOne();
      res.json(getById);
    } catch (error) {
      res.json(error);
    }
  }

  public async getParecerByAuthor(req: Request, res: Response, next: NextFunction) {
    const { autor } = req.query; 
    try {
      const getByAuthor = await parecerRepository
        .createQueryBuilder("parecer")
        .where("parecer.autor = :autor", { autor: autor })
        .getMany();
      res.json(getByAuthor);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno.' });
    }
  }
  

  public async getParecerByEmenta(req: Request, res: Response, next: NextFunction) {
    const { ementa } = req.body; 
    try {
      const getByEmenta = await parecerRepository
        .createQueryBuilder("parecer")
        .where("parecer.ementa = :ementa", { ementa: ementa })
        .getMany();
      res.json(getByEmenta);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno.' });
    }
  }

  public async getParecerByNumber(req: Request, res: Response, next: NextFunction) {
    const { numero_parecer } = req.query; 
    try {
      const getByNumber = await parecerRepository
        .createQueryBuilder("parecer")
        .where("parecer.numero_parecer = :numero_parecer", { numero_parecer: numero_parecer })
        .getMany();
      res.json(getByNumber);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno.' });
    }
  }
  
  
  public async getAllPareceres(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllPareceres_ = await parecerRepository
        .createQueryBuilder("parecer")
        .getMany();
      res.json(getAllPareceres_); 
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno.' }); 
    }
  }
  
}
export default new ParecerController();