import { Request, Response } from 'express';

export default async (_request: Request, response: Response) => {
  // eslint-disable-next-line no-console
  console.log('[Server] Incoming request');
  response.json({ message: 'Hello World!' });
};
