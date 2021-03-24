import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scores")
export default class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  challenge_id: number;

  @Column()
  finished: boolean;

  @CreateDateColumn()
  created_at: Date;
}
