import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { TagsService } from '../tags/tags.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, PrismaService, TagsService],
})
export class NotesModule {}
