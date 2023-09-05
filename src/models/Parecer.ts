import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";

@Entity({ name: "parecer" })
export class Parecer {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  parecer_id!: number;

  @Column({
    type: "varchar",
  })
  autor!: string;

  @Column({
    type: "varchar",
  })
  tombo!: string;

  @Column({
    type: "datetime", 
  })
  data!: string;

  @Column({
    type: "longtext",
  })
  ementa!: string;

  @Column({
    type: "varchar",
  })
  procuradoria!: string;

  @Column({
    type: "varchar",
  })
  orientacao_juridica!: string;

  @Column({
    type: "varchar",
  })
  numero_parecer!: string;

  @Column({
    type: "varchar",
  })
  numero_processo!: string;

  @Column({
    type: "varchar",
  })
  anexo!: string;
}
