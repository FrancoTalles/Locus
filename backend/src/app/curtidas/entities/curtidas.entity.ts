import { Post } from "src/app/post/entities/post.entity";
import { Usuario } from "src/app/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'curtidas' })
export class Curtidas {

    @PrimaryGeneratedColumn()
    curtidas_id: number;

    @Column()
    post_id: number;

    @ManyToOne(() => Post)
    @JoinColumn({name: 'post_id'})
    post: Post;

    @Column()
    usuario_id: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    @CreateDateColumn() 
    created_at: Date 
}
