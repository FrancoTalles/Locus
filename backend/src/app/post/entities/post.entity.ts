import { Comentario } from "src/app/comentarios/entities/comentario.entity";
import { Curtidas } from "src/app/curtidas/entities/curtidas.entity";
import { Local } from "src/app/local/entities/local.entity";
import { Usuario } from "src/app/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'post' })
export class Post {

    @PrimaryGeneratedColumn()
    post_id: number;

    @Column({ type: 'varchar', length: 50 })
    descricao: string;

    @Column({ type: 'varchar', length: 50 })
    imagem: string;

    @Column()   
    local_id: number;

    @ManyToOne(() => Local)
    @JoinColumn({name: 'local_id'})
    local: Local;

    @Column()
    usuario_id: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    @CreateDateColumn() 
    created_at: Date 

    @UpdateDateColumn() 
    updated_at: Date

    @OneToMany(() => Comentario, (comentario) => comentario.post)
    comentarios: Comentario[]

    @OneToMany(() => Curtidas, (curtidas) => curtidas.post)
    curtidas: Curtidas[]
}
