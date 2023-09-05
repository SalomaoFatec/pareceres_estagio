import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToMany,
  } from "typeorm";

  @Entity({ name: "procurador" })
  export class Procurador {
    @PrimaryGeneratedColumn({
      type: "int",
    })
    procurador_id!: number;
  
    @Column({
      type: "varchar",
    })
    nome!: string;
  
    @Column({
      type: "varchar",
    })
    email!: string;
  
  }
  