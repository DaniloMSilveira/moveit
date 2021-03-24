import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateScores1616547825500 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "scores",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isGenerated: true,
                  generationStrategy: "increment",
                  isPrimary: true,
                },
                {
                  name: "user_id",
                  type: "int",
                },
                {
                  name: "challenge_id",
                  type: "int",
                },
                {
                  name: "finished",
                  type: "boolean",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                    name: "FKUser",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                  name: "FKChallenge",
                  referencedTableName: "challenges",
                  referencedColumnNames: ["id"],
                  columnNames: ["challenge_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE"
              },
              ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("scores");
    }

}

