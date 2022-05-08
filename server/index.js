
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import letterRoutes from './routes/letters.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/letters', letterRoutes);
app.use('/users', userRoutes);
dotenv.config();
// const CONNECTION_URL = 'mongodb+srv://wda01:webdevadv2022@cluster0.xjcm1.mongodb.net/coziDB?retryWrites=true&w=majority'
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));