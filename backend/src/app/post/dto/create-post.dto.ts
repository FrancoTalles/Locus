import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePostDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'A descrição é obrigatória.' })
    @IsString()
    @MaxLength(50)
    descricao: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A imagem é obrigatória.' })
    @IsString()
    @MaxLength(50)
    imagem: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do local é obrigatório.' })
    @IsNumber()
    local_id: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do usuário é obrigatório.' })
    @IsNumber()
    usuario_id: number;
}
