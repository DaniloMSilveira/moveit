import { Router } from "express";
import UserController from "./controller/UserController";
import ChallengeController from "./controller/ChallengeController";
import ScoreController from "./controller/ScoreController";

const routes = Router();

routes.get("/users", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:username", UserController.alter);
routes.delete("/users/:username", UserController.remove);

routes.get("/challenges", ChallengeController.show);
routes.post("/challenges", ChallengeController.create);
routes.put("/challenges/:id", ChallengeController.alter);
routes.delete("/challenges/:id", ChallengeController.remove);

routes.post("/scores", ScoreController.create);
routes.delete("/scores/:id", ScoreController.remove);

export default routes;
