import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';


@Entity('perfil')
export class Perfil {

    // CHECK: El id del perfil, tambien tiene que ser un string?
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    usuario_id: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    telefono: string;

    @Column()
    google_id: string;

    // Relaciones:
    @OneToOne(
        () => Usuario,
        (usuario) => usuario.Perfil
    )
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;


}