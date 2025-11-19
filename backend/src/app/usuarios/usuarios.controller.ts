import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('criarUsuario')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('listarUsuario')
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('listarUsuarioId/:id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(Number(id));
  }

  @Patch('atualizarUsuario/:id')
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(Number(id), updateUsuarioDto);
  }

  @Delete('deletarUsuario/:id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(Number(id));
  }
}
