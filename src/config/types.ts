export interface CorsConfig {
  origin: string[];
  methods: string[];
  credentials: boolean;
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge: number;
}

export interface DatabaseConfig {
  url: string;
}

export interface AppConfig {
  port: number;
  environment: string;
  apiPrefix: string;
  apiVersion: string;
}

export interface EnvironmentConfig {
  port: number;
  environment: string;
  apiPrefix: string;
  apiVersion: string;
  cors: CorsConfig;
  database: DatabaseConfig;
  logging: boolean;
}
