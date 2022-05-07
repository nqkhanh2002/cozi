import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import letterRoutes from './routes/letters.js';

const app = express();

app.use('/letters', letterRoutes);

app.use(express.json());
app.use(cors);

const CONNECTION_URL = 'mongodb+srv://wda01:webdevadv2022@cluster0.xjcm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
