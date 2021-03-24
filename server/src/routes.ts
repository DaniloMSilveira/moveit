import { Router } from "express";
import UserController from "./controller/UserController";
import ChallengeController from "./controller/ChallengeController";

const routes = Router();

routes.get("/users", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:username", UserController.alter);
routes.delete("/users/:username", UserController.remove);

routes.get("/challenges", ChallengeController.show);
routes.post("/challenges", ChallengeController.create);
routes.put("/challenges/:id", ChallengeController.alter);
routes.delete("/challenges/:id", ChallengeController.remove);

export default routes;
