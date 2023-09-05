import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import {
  Procurador,
  Procuradoria,
  User,
  Parecer,
} from "../models";

dotenv.config();

export const DataBaseSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false, 
  entities: [Parecer, Procurador, Procuradoria, User],
});
