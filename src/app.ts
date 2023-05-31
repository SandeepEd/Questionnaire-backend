import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import createError from 'http-errors';
import nocache from 'nocache';
import helmet from 'helmet';
import { router } from './routes';
import { handleErrors } from './utils/HandleErrors';

const app = express();
const redisClient = createClient();
redisClient.connect().catch((err: string) => {
  throw new Error(err);
});

const redisStore = new RedisStore({
  client: redisClient,
});

const expressSession = session({
  name: `apiSession`,
  store: redisStore,
  secret: `my_secret`,
  resave: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    // expires: new Date(Date.now() + 60 * 60 * 1000),
    maxAge: 60 * 60 * 1000,
  },
});

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Credentials`, `true`);
  res.header(`Access-Control-Allow-Origin`, req.headers.origin);
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
);

app.use(router);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(handleErrors);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port 3000`);
});
