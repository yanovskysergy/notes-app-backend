import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() data: CreateTagDto) {
    return this.prisma.tag.create({ data });
  }

  @Get()
  findAll() {
    return this.prisma.tag.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
