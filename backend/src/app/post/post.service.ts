import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LocalService } from '../local/local.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly usuarioService: UsuariosService,
    private readonly localService: LocalService
  ) { }

  async create(createPostDto: CreatePostDto) {
    const usuario = await this.usuarioService.findOne(createPostDto.usuario_id);

    if (!usuario) {
      throw new HttpException(`Usuário não encontrado`, HttpStatus.NOT_FOUND);
    }

    const local = await this.localService.findOne(createPostDto.local_id);

    if (!local) {
      throw new HttpException(`Local não encontrado`, HttpStatus.NOT_FOUND);
    }

    try {
      const post = this.postRepository.create(createPostDto);
      return await this.postRepository.save(post);

    } catch (error) {
      throw new InternalServerErrorException('Não foi possível criar o post devido a um erro interno no servidor.');
    }
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(post_id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { post_id } });
    if (!post) {
      throw new NotFoundException(`Post não encontrado.`);
    }
    return post;
  }

  async update(post_id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(post_id);

    if (!post) {
      throw new NotFoundException(`Post não encontrado.`);
    }
    
    if (updatePostDto.usuario_id) {
      const usuario = this.usuarioService.findOne(updatePostDto.usuario_id);

      if(!usuario) {
        throw new NotFoundException(`Usuário novo não encontrado.`)
      }
    }

    if (updatePostDto.local_id) {
      const local = this.localService.findOne(updatePostDto.local_id);

      if(!local) {
        throw new NotFoundException(`Local novo não encontrado.`)
      }
    } 
    
    try {
      this.postRepository.merge(post, updatePostDto);
      
      return await this.postRepository.save(post);
      
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível atualizar o post devido a um erro interno no servidor.');
    }
  }

  async remove(post_id: number): Promise<void> {
    const result = await this.postRepository.delete(post_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post com ID ${post_id} não encontrado para exclusão.`);
    }
  }
}
