import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateComentarioDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'O comentário é obrigatório.' })
    @IsString()
    @MaxLength(300)
    comentario: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do usuario é obrigatório.' })
    @IsNumber()
    usuario_id: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do post é obrigatório.' })
    @IsNumber()
    post_id: number;
}
