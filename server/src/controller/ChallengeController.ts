import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import * as yup from "yup";

export default {
  async show(req: Request, res: Response) {
    const { id } = req.body;

    const schema = yup.object().shape({
      id: yup.number().required()
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const challengesRepository = getCustomRepository(ChallengesRepository);

      const challenge = await challengesRepository.findByIds([id]);

      if (!challenge) {
        throw new AppError("Challenge not exists!");
      }

      return res.status(201).json({
        status: 'sucess',
        obj: challenge
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async create(req: Request, res: Response) {
    const { type, description, amount } = req.body;

    const schema = yup.object().shape({
      type: yup.string().required(),
      description: yup.string().required(),
      amount: yup.number().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const challengesRepository = getCustomRepository(ChallengesRepository);

      const challengeExists = await challengesRepository.findOne({
        type,
        description,
        amount
      });

      if (challengeExists) {
        throw new AppError("Challenge already exists!");
      }

      const challenge = challengesRepository.create({
        type,
        description,
        amount
      });
    
      await challengesRepository.save(challenge);

      return res.status(201).json({
        status: 'sucess',
        obj: challenge
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async alter(req: Request, res: Response) {
    const { id } = req.params;
    const { type, description, amount } = req.body;

    const schema = yup.object().shape({
      type: yup.string().required(),
      description: yup.string().required(),
      amount: yup.number().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const challengesRepository = getCustomRepository(ChallengesRepository);

      const challenge = await challengesRepository.findByIds([id]);

      if (!challenge) {
        throw new AppError("Challenge not exists!");
      }

      challenge.type = type;
      challenge.description = description;
      challenge.amount = amount;

      const resAlter = challengesRepository.save(challenge);

      return res.status(200).json({
        status: 'sucess',
        removed: true,
        obj: challenge
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const challengesRepository = getCustomRepository(ChallengesRepository);

      const challenge = await challengesRepository.findByIds([id]);

      if (!challenge) {
        throw new AppError("Challenge not exists!");
      }

      const resRemove = challengesRepository.remove(challenge);

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
