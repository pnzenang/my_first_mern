import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import colors from 'colors';
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

//db and authenticateUser
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './1frontend/build')));

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './1frontend/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`SERVER IS LISTENING ON PORT ${port}...`.cyan.underline.bold);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
