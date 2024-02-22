import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { router } from './routers/index.route'
const app = express();
const port = 3000;
app.use(cors({
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
