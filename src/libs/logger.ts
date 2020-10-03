import bunyan, { LoggerOptions } from 'bunyan';

const loggerConfig: LoggerOptions = { name: 'node-ts-template' };
const logger: bunyan = bunyan.createLogger(loggerConfig);

export default logger;
