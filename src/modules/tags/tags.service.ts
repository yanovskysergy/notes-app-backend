import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { TagParser } from './utils/tag.parser';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  parseTagsFromText(text: string): string[] {
    return TagParser.parse(text);
  }

  async getOrCreateTags(names: string[]) {
    const existingTags = await this.prisma.tag.findMany({
      where: { name: { in: names } },
      select: { id: true, name: true },
    });

    const existingTagNames = new Set(existingTags.map((t) => t.name));
    const tagsToCreate = names.filter((n) => !existingTagNames.has(n));

    if (tagsToCreate.length) {
      const newTags = await Promise.all(
        tagsToCreate.map((name) => this.create({ name })),
      );

      return [...existingTags, ...newTags];
    }

    return existingTags;
  }

  create({ name }: CreateTagDto) {
    let todo;
    // should add connect to notes here?
    return this.prisma.tag.create({ data: { name } });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: string) {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
