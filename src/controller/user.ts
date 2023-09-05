import { Request, Response, NextFunction } from "express";
import { DataBaseSource } from "../config/database";
import { User } from "../models/index";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import "../config/dotenv";

const userRepositorio = DataBaseSource.getRepository(User);

class UserController {
  public async createUser(req: Request, res: Response, next: NextFunction) {
    const { email, senha, nome } = req.body;
    if (!email || !senha || email.trim() === "" || senha.trim() === "") {
      return res.json({
        error:
          "Para cadastrar um novo usuario, por favor insira o E-mail e senha",
      });
    }
    const obj = new User();
    obj.email = email;
    obj.senha = senha;
    obj.nome = nome;
    const usuario: any = await userRepositorio.manager
      .save(User, obj)
      .catch((e) => {
        if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
          return { error: "e-mail já existe" };
        }
        return { error: e.message };
      });
    if (usuario.id) {
      return res.json({
        id: usuario.id,
        email: usuario.email,
      });
    }
    return res.json(usuario);
  }
  public async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const getUserById = await userRepositorio
        .createQueryBuilder("user")
        .where("user.user_id = :id", { id: id })
        .getOne();
      res.json(getUserById);
    } catch (error) {
      res.json({ err: error });
    }
  }
  public async getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllUser = await userRepositorio
        .createQueryBuilder("user")
        .getMany();
      res.json(getAllUser);
    } catch (error) {
      res.json({ err: error });
    }
  }

  public async loginUser(req: Request, res: Response, next: NextFunction) {
    const { email, senha } = req.body;
  
    if (!email || !senha || email.trim() === "" || senha.trim() === "") {
      return res.json({
        error: "Por favor, insira o E-mail e senha.",
      });
    }
  
    try {

      const existingUser = await userRepositorio.findOne({
        where: { email },
      });
  
      if (!existingUser) {
        return res.json({ error: "Usuário não encontrado." });
      }
  

      const passwordMatch = await bcrypt.compare(senha, existingUser.senha);
  
      if (!passwordMatch) {
        return res.json({ error: "Senha incorreta." });
      }
  

      const secretKey = process.env.SECRET_KEY || 'chave-secreta-padrao';
  
   
      const token = jwt.sign({ userId: existingUser.id }, secretKey, {
        expiresIn: "1h", 
      });
  
      return res.json({ token });
    } catch (error: any) { 
      return res.json({ error: error.message });
    }
  }
  
  
  
 
}
export default new UserController();
