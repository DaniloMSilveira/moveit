import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1614084980668 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar(200)",
          },
          {
            name: "username",
            type: "varchar(200)",
          },
          {
            name: "avatar",
            type: "varchar(200)",
          },
          {
            name: "level",
            type: "int",
            default: "1",
          },
          {
            name: "experience",
            type: "int",
            default: "0",
          },
          {
            name: "time",
            type: "varchar(5)",
            default: "'20:00'",
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
    await queryRunner.dropTable("users");
  }
}
