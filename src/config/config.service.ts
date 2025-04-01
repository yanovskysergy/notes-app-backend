import { Injectable } from '@nestjs/common';
import { environmentConfig } from './environment.config';
import { ConfigValidator } from './validator';
import { EnvironmentConfig } from './types';

@Injectable()
export class ConfigService {
  private config: EnvironmentConfig;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    this.config = environmentConfig[environment];
    ConfigValidator.validate(this.config);
  }

  getConfig(): EnvironmentConfig {
    return this.config;
  }

  getCorsConfig() {
    return this.config.cors;
  }

  getDatabaseConfig() {
    return this.config.database;
  }

  getApiConfig() {
    return {
      prefix: this.config.apiPrefix,
      version: this.config.apiVersion,
    };
  }

  isDevelopment(): boolean {
    return this.config.environment === 'development';
  }

  isProduction(): boolean {
    return this.config.environment === 'production';
  }
}
