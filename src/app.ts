import cors from 'cors';
import { router } from './routes';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import createError from 'http-errors';
import nocache from 'nocache';
import helmet from 'helmet';
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

app.use(router)

app.use((req, res, next) => {
    next(createError(404))
})

app.use(handleErrors)

app.listen(3000, () => {
    console.log('Server running on port 3000');
    }
);
