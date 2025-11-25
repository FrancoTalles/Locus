// src/app/curtidas/curtidas.service.ts

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curtidas } from './entities/curtidas.entity';
import { CreateCurtidasDto } from './dto/create-curtidas.dto';

@Injectable()
export class CurtidasService {
  constructor(
    @InjectRepository(Curtidas)
    private readonly curtidasRepository: Repository<Curtidas>,
  ) {}

  async create(createDto: CreateCurtidasDto) {
    const jaCurtiu = await this.curtidasRepository.findOne({
      where: {
        usuario_id: createDto.usuario_id,
        post_id: createDto.post_id
      }
    });

    if (jaCurtiu) {
      throw new BadRequestException('Você já curtiu este post.');
    }

    const novaCurtida = this.curtidasRepository.create({
      usuario_id: createDto.usuario_id,
      post_id: createDto.post_id
    });

    return await this.curtidasRepository.save(novaCurtida);
  }

  async remove(usuario_id: number, post_id: number) {
    const resultado = await this.curtidasRepository.delete({
      usuario_id: usuario_id,
      post_id: post_id
    });

    if (resultado.affected === 0) {
      throw new NotFoundException('Curtida não encontrada.');
    }

    return { message: 'Descurtiu com sucesso.' };
  }

  async countLikesByPost(post_id: number) {
    const total = await this.curtidasRepository.count({
      where: { post_id: post_id }
    });
    return { post_id: post_id, total_curtidas: total };
  }

  async checkUserLikedPost(usuario_id: number, post_id: number) {
    const count = await this.curtidasRepository.count({
      where: {
        usuario_id: usuario_id,
        post_id: post_id
      }
    });
    return { curtiu: count > 0 };
  }

  async findAllByUser(usuario_id: number) {
    return await this.curtidasRepository.find({
      where: { usuario_id: usuario_id },
      relations: ['post'], 
    });
  }

  async findUsersByPost(post_id: number) {
    return await this.curtidasRepository.find({
      where: { post_id: post_id },
      relations: ['usuario'], 
      select: {
        usuario: {
            usuario_id: true,
            nome: true,
            foto_perfil: true
        }
      } as any 
    });
  }
}