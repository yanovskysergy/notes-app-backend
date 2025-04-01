import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { TagsModule } from './modules/tags/tags.module';
import { NotesModule } from './modules/notes/notes.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, TagsModule, NotesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
