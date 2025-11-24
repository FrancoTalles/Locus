import { Usuario } from "src/app/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'seguidores' })
export class Seguidores {
    @PrimaryGeneratedColumn()
    seguidores_id: number;

    @Column()
    seguidor_id: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.seguindo)
    @JoinColumn({ name: 'seguidor_id' })
    seguidor: Usuario;

    @Column() 
    seguido_id: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.seguidores)
    @JoinColumn({ name: 'seguido_id' })
    seguido: Usuario;

    @CreateDateColumn() 
    created_at: Date;
}
