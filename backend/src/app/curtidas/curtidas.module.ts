import { Module } from '@nestjs/common';
import { CurtidasService } from './curtidas.service';
import { CurtidasController } from './curtidas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curtidas } from './entities/curtidas.entity';
import { PostModule } from '../post/post.module';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Curtidas]), PostModule, UsuariosModule],
  controllers: [CurtidasController],
  providers: [CurtidasService],
})
export class CurtidasModule {}
