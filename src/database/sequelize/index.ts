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

const sequelize = new Sequelize({
    dialect,
    host,
    port,
    database,
    username,
    password
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

export default sequelize