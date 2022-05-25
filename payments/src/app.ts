import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSessison from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@abtix/common';
import { createChargeRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSessison({
    signed: false,
    // secure: true
  })
)

app.use(currentUser);

app.use(createChargeRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
})

app.use(errorHandler);

export { app };