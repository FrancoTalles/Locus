import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSeguidoresDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do Usuário Seguidor é obrigatório.' })
    @IsNumber()
    seguidor_id: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'O ID do Usuário Seguido é obrigatório.' })
    @IsNumber()
    seguido_id: number;
}
