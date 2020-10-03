import bunyan, { LoggerOptions } from 'bunyan';

const loggerConfig: LoggerOptions = { name: 'websocket-api' };
const logger: bunyan = bunyan.createLogger(loggerConfig);

export default logger;
