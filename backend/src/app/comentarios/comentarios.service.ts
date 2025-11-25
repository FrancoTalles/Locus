import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';
import { PostService } from '../post/post.service';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
    private readonly usuarioService: UsuariosService,
    private readonly postService: PostService
  ) { }

  async create(createComentarioDto: CreateComentarioDto) {
    const usuario = await this.usuarioService.findOne(createComentarioDto.usuario_id);

    if (!usuario) {
      throw new HttpException(`Usuário não encontrado`, HttpStatus.NOT_FOUND);
    }

    const post = await this.postService.findOne(createComentarioDto.post_id);

    if (!post) {
      throw new HttpException(`Post não encontrado`, HttpStatus.NOT_FOUND);
    }

    try {
      const post = this.comentarioRepository.create(createComentarioDto);
      return await this.comentarioRepository.save(post);

    } catch (error) {
      throw new InternalServerErrorException('Não foi possível criar o post devido a um erro interno no servidor.');
    }
  }

  async findAll(): Promise<Comentario[]> {
    return this.comentarioRepository.find();
  }

  async findOne(comentario_id: number): Promise<Comentario> {
    const comentario = await this.comentarioRepository.findOne({ where: { comentario_id } });
    if (!comentario) {
      throw new NotFoundException(`Comentario não encontrado.`);
    }
    return comentario;
  }

  async update(comentario_id: number, updateComentarioDto: UpdateComentarioDto) {
    const comentario = await this.findOne(comentario_id);

    if (!comentario) {
      throw new NotFoundException(`Comentario não encontrado.`);
    }
    
    if (updateComentarioDto.usuario_id) {
      const usuario = this.usuarioService.findOne(updateComentarioDto.usuario_id);

      if(!usuario) {
        throw new NotFoundException(`Usuário novo não encontrado.`)
      }
    }

    if (updateComentarioDto.post_id) {
      const post = this.postService.findOne(updateComentarioDto.post_id);

      if(!post) {
        throw new NotFoundException(`Post novo não encontrado.`)
      }
    } 
    
    try {
      this.comentarioRepository.merge(comentario, updateComentarioDto);
      
      return await this.comentarioRepository.save(comentario);
      
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível atualizar o post devido a um erro interno no servidor.');
    }
  }

  async remove(comentario_id: number) {
    const result = await this.comentarioRepository.delete(comentario_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Comentario com ID ${comentario_id} não encontrado para exclusão.`);
    }
  }
}
