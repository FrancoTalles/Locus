import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(usuario_id: number) {
    const usuario = await this.usuarioRepository.findOne({ where: { usuario_id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario não encontrado.`);
    }
    return usuario;
  }

  async update(usuario_id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(usuario_id);
    this.usuarioRepository.merge(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async remove(usuario_id: number) {
    const result = await this.usuarioRepository.delete(usuario_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario não encontrado para exclusão.`);
    }
  }
}
