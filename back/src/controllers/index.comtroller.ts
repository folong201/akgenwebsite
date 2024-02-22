import { Request, Response } from 'express';

const HelloFunction = (req: Request, res: Response) => {
    res.send("Hello World!");
}
const hello2 = (req: Request, res: Response) => {
    res.send("Hello World 2!");
}

export { HelloFunction, hello2 };
