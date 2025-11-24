import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seguidores } from './entities/seguidores.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class SeguidoresService {
  constructor(
    @InjectRepository(Seguidores)
    private readonly seguidoresRepository: Repository<Seguidores>,
    private readonly usuarioService: UsuariosService,
  ) { }

  async create(createSeguidoresDto: CreateSeguidoresDto) {
    if (createSeguidoresDto.seguidor_id === createSeguidoresDto.seguido_id) {
      throw new BadRequestException('Você não pode seguir a si mesmo.');
    }

    const jaSegue = await this.seguidoresRepository.findOne({
      where: {
        seguidor: { usuario_id: createSeguidoresDto.seguidor_id },
        seguido: { usuario_id: createSeguidoresDto.seguido_id }
      }
    });

    if (jaSegue) {
      throw new BadRequestException('Você já segue este usuário.');
    }

    const novoSeguimento = this.seguidoresRepository.create(createSeguidoresDto);

    return await this.seguidoresRepository.save(novoSeguimento);
  }

  async findAllSeguidoresUsuario(usuario_id: number) {
    return await this.seguidoresRepository.find({
      where: {
        seguido: { usuario_id }
      },
      relations: ['seguidor'],
      select: {
        created_at: true,
        seguidor: {
          usuario_id: true,
          nome: true,
          foto_perfil: true
        }
      }
    });
  }

  async findAllSeguidosUsuario(usuario_id: number) {
    return await this.seguidoresRepository.find({
      where: {
        seguidor: { usuario_id }
      },
      relations: ['seguido'],
      select: {
        created_at: true,
        seguido: {
          usuario_id: true,
          nome: true,
          foto_perfil: true
        }
      }
    });
  }

  async verificaSeSegue(seguidor_id: number, seguido_id: number) {
    const registro = await this.seguidoresRepository.findOne({
      where: {
        seguidor: { usuario_id: seguidor_id },
        seguido: { usuario_id: seguido_id }
      },
      select: ['seguidores_id']
    });

    return !!registro
  }

  async remove(seguidor_id: number, seguido_id: number) {
    if (seguidor_id === seguido_id) {
      throw new BadRequestException('Você não pode deixar de seguir a si mesmo.');
    }

    const resultado = await this.seguidoresRepository.delete({
      seguidor: { usuario_id: seguidor_id },
      seguido: { usuario_id: seguido_id },
    });

    if (resultado.affected === 0) {
       throw new NotFoundException('Você não seguia este usuário.');
    }

    return { message: 'Deixou de seguir com sucesso.' };
}
}
