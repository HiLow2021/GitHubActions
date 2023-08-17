import { PrismaClient } from '@prisma/client';
import cors, { CorsOptions } from 'cors';
import express, { NextFunction } from 'express';

const app: express.Express = express();
const port = 5000;

app.use(express.json());

const allowedOrigins = ['http://localhost:3000'];
const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const prisma = new PrismaClient();

app.get('/', async (_, res, next: NextFunction): Promise<void> => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    } catch (error) {
        res.status(500);
    }

    next();
});

app.listen(port, () => {
    console.log(`start on port ${port}`);
});
