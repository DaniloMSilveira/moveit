import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import { ScoresRepository } from "../repositories/ScoresRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import * as yup from "yup";

export default {
  async create(req: Request, res: Response) {
    const { user_id, challenge_id, finished } = req.body;

    const schema = yup.object().shape({
      user_id: yup.number().required(),
      challenge_id: yup.number().required(),
      finished: yup.boolean().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const scoresRepository = getCustomRepository(ScoresRepository);
      const usersRepository = getCustomRepository(UsersRepository);
      const challengesRepository = getCustomRepository(ChallengesRepository);

      const user = await usersRepository.findOne({
        id: user_id
      });

      if (!user) {
        throw new AppError("User not exists!");
      }

      const challenge = await challengesRepository.findOne({
        id: challenge_id
      });

      if (!challenge) {
        throw new AppError("Challenge not exists!");
      }

      const score = scoresRepository.create({
        user_id,
        challenge_id,
        finished
      });
    
      await scoresRepository.save(score);

      return res.status(201).json({
        status: 'sucess',
        obj: score
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const scoresRepository = getCustomRepository(ScoresRepository);

      const score = await scoresRepository.findOne({
        id
      });

      if (!score) {
        throw new AppError("Score not exists!");
      }

      const resRemove = scoresRepository.remove(score);

      return res.status(200).json({
        status: 'sucess',
        removed: true,
        obj: resRemove
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
};
