import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SEGUIDORES')
@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  create(@Body() createSeguidoresDto: CreateSeguidoresDto) {
    return this.seguidoresService.create(createSeguidoresDto);
  }

  @Get('/seguidores:id')
  findAllSeguidoresUsuario(@Param('id') id: string) {
    return this.seguidoresService.findAllSeguidoresUsuario(+id);
  }

  @Get('/seguidos:id')
  findAllSeguidosUsuario(@Param('id') id: string) {
    return this.seguidoresService.findAllSeguidosUsuario(+id);
  }

  @Get('/verificaSeSegue/:seguidor_id/:seguido_id')
  verificaSeSegue(@Param('seguidor_id') seguidor_id: string, @Param('seguido_id') seguido_id: string) {
    return this.seguidoresService.verificaSeSegue(+seguidor_id, +seguido_id);
  }

  @Delete('/pararSeguir/:seguidor_id/:seguido_id')
  remove(@Param('seguidor_id') seguidor_id: string, @Param('seguido_id') seguido_id: string) {
    return this.seguidoresService.remove(+seguidor_id, +seguido_id);
  }
}
