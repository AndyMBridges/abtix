import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSessison from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@abtix/common';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { updateTicketRouter } from './routes/update';
import { indexTicketRouter } from './routes';

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

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter)
app.use(updateTicketRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
})

app.use(errorHandler);

export { app };