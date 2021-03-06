import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSessison from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@abtix/common';
import { newOrderRouter } from './routes/new';
import { showOrderRouter } from './routes/show';
import { deleteOrderRouter } from './routes/delete';
import { indexOrderRouter } from './routes';

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

app.use(deleteOrderRouter);
app.use(indexOrderRouter)
app.use(newOrderRouter);
app.use(showOrderRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
})

app.use(errorHandler);

export { app };