import { Module } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { SeguidoresController } from './seguidores.controller';
import { Seguidores } from './entities/seguidores.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Seguidores]), UsuariosModule],
  controllers: [SeguidoresController],
  providers: [SeguidoresService],
})
export class SeguidoresModule {}
