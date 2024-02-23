import express from 'express';
import { carRoutes } from './modules/cars/routes';


const app = express();

app.use(express.json());

app.use(carRoutes)

app.listen(3333, () => console.log('listening on'))