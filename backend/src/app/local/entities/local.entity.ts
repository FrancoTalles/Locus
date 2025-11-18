import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'local' })
export class Local {

    @PrimaryGeneratedColumn()
    local_id;

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
}
