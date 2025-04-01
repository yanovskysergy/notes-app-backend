import { EnvironmentConfig } from './types';

export class ConfigValidator {
  static validate(config: EnvironmentConfig): void {
    if (config.port < 1 || config.port > 65535) {
      throw new Error(`Invalid port number: ${config.port}`);
    }

    if (!['development', 'production'].includes(config.environment)) {
      throw new Error(`Invalid environment: ${config.environment}`);
    }

    if (!config.cors.origin.length) {
      throw new Error('CORS origins cannot be empty');
    }

    if (!config.database.url) {
      throw new Error('Database URL is required');
    }

    if (!config.apiPrefix || !config.apiVersion) {
      throw new Error('API prefix and version are required');
    }
  }
}
