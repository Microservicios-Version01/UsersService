import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Rol } from '../../roles/entitties/roles.entity';
import { Perfil } from "../../perfiles/entities/perfil.entity";
import { Permiso } from '../../permisos/entities/permisos.entity';

@Entity('usuario')
export class Usuario {

    // NOTE: usuario id?
    // va a ser un id, normal, no un uuid,
    // para evitarme problemas por el momento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 30, unique: true})
    username: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false, length: 30})
    password: string;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    // Relaciones:
    @OneToOne(
        () => Perfil,
        (Perfil) => Perfil.usuario,{ cascade: true }
    )
    @JoinColumn({ name: 'perfil_id' })
    Perfil: Perfil; // 1 usuario, puede tener 1 perfil

    @ManyToMany(
        () => Rol, { cascade: true }
    )
    @JoinTable({ name: 'usuario_roles' })
    roles: Rol[]; // muchos usuarios, pueden tener muchos roles

    @ManyToMany(
        () => Permiso, { cascade: true }
    )
    @JoinTable({ name: 'usuario_permisos' })
    permisos: Permiso[]; // muchos usuarios, pueden tener muchos permisos

}