import { Post } from "src/app/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'local' })
export class Local {

    @PrimaryGeneratedColumn()
    local_id: number;

    @Column({ type: 'varchar', length: 20 })
    nome: string;

    @Column({ type: 'varchar', length: 50 })
    endereco: string;

    @Column({ type: 'varchar', length: 20})
    categoria: string;

    @Column({ type: 'varchar', length: 20 })
    latitude: string;
    
    @Column({ type: 'varchar', length: 50 })
    longitude: string;

    @CreateDateColumn() 
    created_at: Date

    @OneToMany(() => Post, (post) => post.local)
    posts: Post[];
}
