import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { randomUUID } from "node:crypto"
import { timestamp } from "rxjs"
import { Post } from "src/app/post/entities/post.entity";

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
}
