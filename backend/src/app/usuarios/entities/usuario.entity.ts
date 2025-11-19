import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { randomUUID } from "node:crypto"
import { timestamp } from "rxjs"

@Entity('usuarios')
export class Usuario {

    //Verificar na modelagem os campos na tabela usuario
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string  


}
