import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUsuarioDto {
    
        @ApiProperty()
        @IsString()
        @IsNotEmpty({ message: 'O nome é obrigatório.' })
        @MaxLength(20)
        nome: string;
    
        @ApiProperty()
        @IsEmail({}, { message: 'Formato de e-mail inválido.' })
        @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
        @MaxLength(50)
        email: string;

        @ApiProperty()
        @IsNotEmpty({ message: 'A senha é obrigatoria' })
        @MaxLength(50)
        senha_hash:string;
    
        @ApiProperty()
        @IsString()
        @MaxLength(100)
        foto_perfil: string;
    
}
