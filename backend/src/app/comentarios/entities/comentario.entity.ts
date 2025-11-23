import { Post } from "src/app/post/entities/post.entity";
import { Usuario } from "src/app/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'comentarios' })
export class Comentario {
    @PrimaryGeneratedColumn()
    comentario_id: number;

    @Column({ type: 'varchar', length: 300 })
    comentario: string;

    @Column()
    usuario_id: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column()
    post_id: number;

    @ManyToOne(() => Post)
    @JoinColumn({ name: 'post_id' })
    post: Post

    @CreateDateColumn() 
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
