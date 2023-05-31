import { Sequelize, Options } from "sequelize";
import config from "config";

const { dialect, username, password, database, host, port }: Options =
  config.get("database");

export class SequelizeSingleton {
  private static instance: Sequelize;

  private constructor() {}

  public static getInstance() {
    if (!SequelizeSingleton.instance) {
      try {
        SequelizeSingleton.instance = new Sequelize({
          dialect,
          host,
          port,
          database,
          username,
          password,
          // dialectOptions: {
          //   ssl: {
          //     require: true,
          //     rejectUnauthorized: false, // false for development, true for production
          //   },
          // },
        });
      } catch (error) {
        console.log("error", error);
      }
    }

    return SequelizeSingleton.instance;
  }
}

export const sequelize = SequelizeSingleton.getInstance();
