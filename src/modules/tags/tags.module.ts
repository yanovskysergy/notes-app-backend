import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [TagsController],
  providers: [PrismaService],
})
export class TagsModule {}
