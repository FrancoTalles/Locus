import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalModule } from './local/local.module';

import { PostModule } from './post/post.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { CurtidasModule } from './curtidas/curtidas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'database.sqlite', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,
    }),
    LocalModule,
    UsuariosModule,
    PostModule,
    ComentariosModule,
    SeguidoresModule,
    CurtidasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
