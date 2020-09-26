import { Request, Response } from 'express';

export default async (_request: Request, response: Response) => response.json({ message: 'Hello World!' });
