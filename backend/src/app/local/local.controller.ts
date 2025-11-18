import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { Local } from './entities/local.entity';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createLocalDto: CreateLocalDto): Promise<Local> {
    return this.localService.create(createLocalDto);
  }

  @Get()
  findAll(): Promise<Local[]> {
    return this.localService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Local> {
    return this.localService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocalDto: UpdateLocalDto,
  ): Promise<Local> {
    return this.localService.update(id, updateLocalDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) 
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.localService.remove(id);
  }
}