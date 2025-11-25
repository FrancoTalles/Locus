import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateLocalDto {

  local_id?: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O nome do local é obrigatório.' })
  @IsString()
  @MaxLength(20)
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O endereço é obrigatório.' })
  @IsString()
  @MaxLength(50)
  endereco: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A categoria é obrigatória.' })
  @IsString()
  @MaxLength(20)
  categoria: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A latitude é obrigatória.' })
  @IsString()
  @MaxLength(20)
  latitude: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A longitude é obrigatória.' })
  @IsString()
  @MaxLength(50)
  longitude: string;
}