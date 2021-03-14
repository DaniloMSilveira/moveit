import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  avatar: string;

  @Column()
  level: number;

  @Column()
  experience: number;

  @Column()
  time: string;

  @CreateDateColumn()
  created_at: Date;
}
