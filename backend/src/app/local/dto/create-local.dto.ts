import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateLocalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  endereco: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  categoria: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  latitude: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  longitude: string;
}