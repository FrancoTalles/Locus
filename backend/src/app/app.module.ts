import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalModule } from './local/local.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'database.sqlite', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,
    }),
    LocalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
