import { PrismaClient } from '@prisma/client';
import cors, { CorsOptions } from 'cors';
import express, { Request, Response } from 'express';

const app: express.Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const prisma = new PrismaClient();

app.get('/', async (_: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    } catch (error) {
        res.status(500);
    }
});

const server = app.listen(port, () => {
    console.log(`start on port ${port}`);
});

export { app, server };
