import { Request, Response } from 'express'

export default async (request: Request, response: Response) => response.json({ message: 'Hello World!'})