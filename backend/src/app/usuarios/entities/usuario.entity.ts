import { Comentario } from "src/app/comentarios/entities/comentario.entity";
import { Curtidas } from "src/app/curtidas/entities/curtidas.entity";
import { Post } from "src/app/post/entities/post.entity";
import { Seguidores } from "src/app/seguidores/entities/seguidores.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'usuario' })
export class Usuario {

    @PrimaryGeneratedColumn()
    usuario_id: number;

    @Column({ type: 'varchar', length: 20 })
    nome: string;

    @Column({ type: 'varchar', length: 50})
    email: string;
    
    @Column({ type: 'varchar', length: 50})
    senha_hash: string;

    @Column({ type: 'varchar', length: 50})
    foto_perfil: string;

    @CreateDateColumn() 
    created_at: Date 

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Post, (post) => post.usuario)
    posts: Post[]

    @OneToMany(() => Comentario, (comentario) => comentario.usuario)
    comentarios: Comentario[]

    @OneToMany(() => Seguidores, (seguidores) => seguidores.seguidor)
    seguindo: Seguidores[];

    @OneToMany(() => Seguidores, (seguidores) => seguidores.seguido)
    seguidores: Seguidores[];

    @OneToMany(() => Curtidas, (curtidas) => curtidas.usuario)
    curtidas: Curtidas[]
}
