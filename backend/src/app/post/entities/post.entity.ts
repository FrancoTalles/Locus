import { Local } from "src/app/local/entities/local.entity";
import { Usuario } from "src/app/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}
