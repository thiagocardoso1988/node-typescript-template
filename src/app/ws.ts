import { Server } from 'http';
import DefaultController from '@controllers/ws/defaultController';
import socketio, { Server as IoServer } from 'socket.io';

const availableNamespaces = [
  DefaultController,
];

export const registerNamespaces: Function = (io: IoServer) => availableNamespaces
  .forEach((namespace) => namespace(io));

export const initWsServer = (server: Server): IoServer => {
  const socketServer = socketio(server);
  registerNamespaces(socketServer);

  return socketServer;
};

export default {
  initWsServer,
  registerNamespaces,
};
