import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const config = configService.getConfig();

  app.enableCors(config.cors);

  app.setGlobalPrefix(`${config.apiPrefix}/${config.apiVersion}`);

  await app.listen(config.port);

  console.log(`Application is running on: http://localhost:${config.port}`);
  console.log(`Environment: ${config.environment}`);
  console.log(`API: ${config.apiPrefix}/${config.apiVersion}`);
}
bootstrap();
