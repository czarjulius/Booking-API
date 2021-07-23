import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

import {
  appErrorHandler,
  genericErrorHandler
} from './middlewares/error.middleware';
import router from './routes/index';
import './configs/db';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send(' Welcome To Booking APP');
});

app.use(appErrorHandler);

app.use('*', (req, res) =>
  res.status(404).json({
    status: '404',
    message: 'route not found'
  })
);

app.use(genericErrorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
