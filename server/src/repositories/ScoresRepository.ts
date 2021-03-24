import { EntityRepository, Repository } from "typeorm";
import Score from "../models/Score";

@EntityRepository(Score)
class ScoresRepository extends Repository<Score> {}

export { ScoresRepository };
