import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurtidasService } from './curtidas.service';
import { CreateCurtidasDto } from './dto/create-curtidas.dto';
import { UpdateCurtidasDto } from './dto/update-curtidas.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CURTIDAS')
@Controller('curtidas')
export class CurtidasController {
  constructor(private readonly curtidasService: CurtidasService) {}

  @Post()
  create(@Body() createDto: CreateCurtidasDto) {
    return this.curtidasService.create(createDto);
  }

  @Delete('removeLike/:post_id/:usuario_id')
  remove(@Param('post_id') post_id: string, @Param('usuario_id') usuario_id: string) {
    return this.curtidasService.remove(+usuario_id, +post_id);
  }

  @Get('status/:post_id/:usuario_id')
  checkStatus(@Param('post_id') post_id: string, @Param('usuario_id') usuario_id: string) {
    return this.curtidasService.checkUserLikedPost(+usuario_id, +post_id);
  }

  @Get('post/:post_id/contagem')
  countLikes(@Param('post_id') post_id: string) {
    return this.curtidasService.countLikesByPost(+post_id);
  }

  @Get('post/:post_id/usuarios')
  getLikers(@Param('post_id') post_id: string) {
    return this.curtidasService.findUsersByPost(+post_id);
  }

  @Get('meus-likes/:usuario_id')
  getMyLikes(@Param('usuario_id') usuario_id: string) {
    return this.curtidasService.findAllByUser(+usuario_id);
  }
}
