import winston from "winston";
import path from "path";
const month = new Date().toISOString().slice(0, 7);
//2025-04
const logFileName = path.join("logs", `app-${month}.log`);

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}${level =='error'? '!': ':)'}: ${message}`;
    })
  ),
  
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/errors.log', level: 'error' }),
    new winston.transports.File({ filename: logFileName }),
  ],
});