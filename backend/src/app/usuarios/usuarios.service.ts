import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {


  // Precisa trabalahar as regras de negócio..
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'Usuário criado!';
  }

  findAll() {
    return `Lista de todos o usuários`;
  }

  findOne(id: number) {
    return `Listando um usuário por id: #${id}`; 
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Atualizando o usuario: #${id}`;
  }

  remove(id: number) {
    return `Deletando o usuario: #${id}`;
  }
}
