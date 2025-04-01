import { corsConfig } from './cors.config';
import { appConfig } from './app.config';

export const environmentConfig = {
  development: {
    ...appConfig,
    cors: corsConfig.development,
    database: {
      url: process.env.DATABASE_URL || 'file:./dev.db',
    },
    logging: true,
  },
  production: {
    ...appConfig,
    cors: corsConfig.production,
    database: {
      url: process.env.DATABASE_URL,
    },
    logging: false,
  },
};
