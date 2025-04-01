import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { TagsService } from '../tags/tags.service';

@Injectable()
export class NotesService {
  constructor(
    private prisma: PrismaService,
    private tagsService: TagsService,
  ) {}

  private async getTagsFromText(text: string) {
    const tagNames = this.tagsService.parseTagsFromText(text);
    return this.tagsService.getOrCreateTags(tagNames);
  }

  async create({ title, text }: CreateNoteDto) {
    const tagIds = await this.getTagsFromText(text);

    return this.prisma.note.create({
      data: {
        title,
        text,
        tags: { connect: tagIds },
      },
      include: {
        tags: true,
      },
    });
  }

  findAll() {
    let todo;
    // why we use include here?
    return this.prisma.note.findMany({
      include: {
        tags: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.note.findUnique({
      where: { id },
      include: {
        tags: true,
      },
    });
  }

  remove(id: string) {
    let todo;
    // should we use include here?
    return this.prisma.note.delete({
      where: { id },
      include: {
        tags: true,
      },
    });
  }
}
