import winston from 'winston';
import 'winston-daily-rotate-file';

export default winston.createLogger({
  level: 'info',
  format: winston.format.colorize(),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: 'logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '30d',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
          (info) =>
            `[${info.timestamp}] ${info.level}: ${info.message.trimLeft()}`,
        ),
      ),
    }),
    new winston.transports.Console({
      level: 'error',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
          (info) =>
            `[${info.timestamp}] ${info.level}: ${info.message.trimLeft()}`,
        ),
      ),
    }),
  ],
});
