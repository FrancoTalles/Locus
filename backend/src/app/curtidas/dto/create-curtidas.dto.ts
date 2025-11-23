import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCurtidasDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do post é obrigatório.' })
    @IsNumber()
    post_id: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do usuario é obrigatório.' })
    @IsNumber()
    usuario_id: number;
}
