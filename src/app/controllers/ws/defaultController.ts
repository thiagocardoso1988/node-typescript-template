import { Server } from 'socket.io';
import Logger from '@libs/logger';

const logger = Logger.child({ namespace: 'default' });

export default (io: Server) => {
  io.use((socket, next) => {
    next();
  });

  io.on('connection', (socket) => {
    const { userId } = socket.handshake.query;
    logger.info({ socketId: socket.id, userId }, 'Receiving new connection');

    socket.on('piing', () => {
      logger.info({ socketId: socket.id, userId }, 'Client pinged us, sending poong');
      socket.emit('poong');
    });

    socket.on('message', (data) => {
      logger.info({ socketId: socket.id, userId }, 'Message received', data);
      socket.emit('message', data);
    });

    socket.on('disconnect', () => {
      logger.info({ socketId: socket.id, userId }, 'Connection lost');
    });
  });
};
