import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('rol')
export class Rol {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	nombre: string;

	@Column({ type: 'text', nullable: true })
	descripcion: string;

    // Relaciones:
	@ManyToMany(
        () => Usuario,
        //QUESTION: En las relaciones M:M, por que, esto tiene una relacion bidireccional? 
        (usuario) => usuario.roles
    )
    usuarios: Usuario[];


}
