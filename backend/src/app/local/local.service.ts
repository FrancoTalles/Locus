// src/local/local.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Local } from './entities/local.entity'; // Sua Entidade
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';

@Injectable()
export class LocalService {
  constructor(
    @InjectRepository(Local)
    private readonly localRepository: Repository<Local>,
  ) {}

  async create(createLocalDto: CreateLocalDto): Promise<Local> {
    const local = this.localRepository.create(createLocalDto);
    return this.localRepository.save(local);
  }

  async findAll(): Promise<Local[]> {
    return this.localRepository.find();
  }

  async findOne(local_id: number): Promise<Local> {
    const local = await this.localRepository.findOne({ where: { local_id } });
    if (!local) {
      throw new NotFoundException(`Local com ID ${local_id} não encontrado.`);
    }
    return local;
  }

  async update(local_id: number, updateLocalDto: UpdateLocalDto): Promise<Local> {
    const local = await this.findOne(local_id); 
    this.localRepository.merge(local, updateLocalDto);
    return this.localRepository.save(local);
  }

  async remove(local_id: number): Promise<void> {
    const result = await this.localRepository.delete(local_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Local com ID ${local_id} não encontrado para exclusão.`);
    }
  }
}