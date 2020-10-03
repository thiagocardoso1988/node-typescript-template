import { createServer as createSimpleServer } from 'http';
import { createServer as createHTTPSServer } from 'https';
import { initWsServer } from '@app/ws';
import app from '@app/app';
import express from 'express';
import fs from 'fs';
import Logger from '@libs/logger';

const generateServer = (appConfig: express.Application) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    Logger.info('Initializing HTTP server');
    return createSimpleServer(appConfig);
  }

  Logger.info('Initializing HTTPS server');
  const privateKey = fs.readFileSync('ssl/server.key');
  const certificate = fs.readFileSync('ssl/server.crt');
  const credentials = { key: privateKey, cert: certificate };

  return createHTTPSServer(credentials, appConfig);
};

const PORT = process.env.PORT || 3000;
const server = generateServer(app);
initWsServer(server);

app.get('/health', (_req, res) => res.status(200).json({ status: 'Running!' }));

server.listen(PORT, () => Logger.info(`Listening to port ${PORT}`));
