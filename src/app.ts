import express from 'express';
import { router } from './routes';
import cors from 'cors';
import session from 'express-session'
// import { createClient } from 'redis';
// import RedisStore from 'connect-redis';
import nocache from 'nocache';
import helmet from 'helmet';
// import { v4 as uuid } from 'uuid';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import { handleErrors } from './utils/HandleErrors';

const app = express();
const expressSession = session({
    name: 'apiSession',
    secret: 'my_secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
    },
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    next();
});

app.use(
    expressSession,
    cors({ origin: true, credentials: true }),
    helmet(),
    nocache(),
    express.json(),
    express.urlencoded({ extended: false }),
    cookieParser(),
)

app.use((req, res, next) => {
    console.log(`session :::`, req.session)
    next()
})

app.use(router)

app.use((req, res, next) => {
    next(createError(404))
})

app.use(handleErrors)

app.listen(3000, () => {
    console.log('Server is running');
}
);
