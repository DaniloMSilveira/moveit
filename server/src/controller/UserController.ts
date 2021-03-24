import { Request, Response } from "express";
import axios from 'axios';
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";

export default {
  async show(req: Request, res: Response) {
    const { username } = req.body;

    const schema = yup.object().shape({
      username: yup.string().required()
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne({
        username,
      });

      if (!user) {
        throw new AppError("User not exists!");
      }

      return res.status(201).json({
        status: 'sucess',
        obj: user
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async create(req: Request, res: Response) {
    const { username } = req.body;

    const schema = yup.object().shape({
      username: yup.string().required()
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const usersRepository = getCustomRepository(UsersRepository);

      const userExists = await usersRepository.findOne({
        username,
      });

      if (userExists) {
        throw new AppError("User already exists!");
      }

      const githubResponse = await axios.get(`https://api.github.com/users/${username}`)

      const { name, avatar_url: avatar } = githubResponse.data

      const user = usersRepository.create({
        name,
        username,
        avatar
      });
    
      await usersRepository.save(user);

      return res.status(201).json({
        status: 'sucess',
        obj: user
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async alter(req: Request, res: Response) {
    const { username } = req.params;
    const { level, experience, time } = req.body;
    
    const schema = yup.object().shape({
      level: yup.number().required(),
      experience: yup.number().required(),
      time: yup.string().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    try {
      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne({
        username,
      });

      if (!user) {
        throw new AppError("User not exists!");
      }

      user.level = level;
      user.experience = experience;
      user.time = time;

      const resAlter = usersRepository.save(user);

      return res.status(200).json({
        status: 'sucess',
        removed: true,
        obj: user
      });
    } catch (error) {
      throw new AppError(error,501);
    }
  },
  async remove(req: Request, res: Response) {
    const { username } = req.params;

    try {
      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne({
        username,
      });

      if (!user) {
        throw new AppError("User not exists!");
      }

      const resRemove = usersRepository.remove(user);

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
