import { Request, Response } from 'express';

const handler = async (_request: Request, response: Response) => {
  // eslint-disable-next-line no-console
  console.log('[Server] Incoming request');
  return response.json({ message: 'Hello World!' });
};

export default handler;
