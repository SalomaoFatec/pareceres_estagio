import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToMany,
  } from "typeorm";

  @Entity({ name: "procuradoria" })
  export class Procuradoria {
    @PrimaryGeneratedColumn({
      type: "int",
    })
    procuradoria_id!: number;
  
    @Column({
      type: "varchar",
    })
    nome_procuradoria!: string;

  
  }
  