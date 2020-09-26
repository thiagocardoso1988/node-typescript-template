import StartController from '@controllers/startController';
import express from 'express';

const app = express();

app.get('/', StartController);

app.listen(3000);
