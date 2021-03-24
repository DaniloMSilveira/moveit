import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChallenges1616547447484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "challenges",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isGenerated: true,
                  generationStrategy: "increment",
                  isPrimary: true,
                },
                {
                  name: "type",
                  type: "varchar(200)",
                },
                {
                  name: "description",
                  type: "varchar(200)",
                },
                {
                  name: "amount",
                  type: "int",
                  default: "1",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("challenges");
    }

}
