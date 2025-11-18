import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('permiso')
export class Permiso {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	nombre: string;

	@Column({ type: 'text', nullable: true })
	descripcion: string;

    // NOTE: permisos -> recurso
    /*
        Asociar el permiso a un recurso específico del sistema.
        Por ejemplo, si tienes permisos para acceder a diferentes partes de una aplicación
        (como "usuarios", "productos", "reportes"), este campo indica a qué recurso se refiere el permiso.
        Así puedes tener permisos como "leer usuarios", "editar productos", etc.,
        y saber a qué parte de la aplicación aplica cada permiso.
    */
	@Column({ length: 100 })
	recurso: string;

    //Relaciones
    @ManyToMany(
        () => Usuario,
        (usuario) => usuario.permisos
    )
	usuarios: Usuario[];
}
