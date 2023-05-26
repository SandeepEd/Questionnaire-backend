import { Sequelize, Options } from "sequelize"
import config from 'config';

const {
    dialect,
    username,
    password,
    database,
    host,
    port
}: Options = config.get('database');

export class SequelizeSingleton {
    private static instance: Sequelize;

    private constructor() { }

    public static getInstance() {
        if (!SequelizeSingleton.instance) {
            SequelizeSingleton.instance = new Sequelize({
                dialect,
                host,
                port,
                database,
                username,
                password
            })
        }

        return SequelizeSingleton.instance;
    }

}

export const sequelize = SequelizeSingleton.getInstance();