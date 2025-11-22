import { IsOptional } from "class-validator";
import { Type } from "class-transformer";

import { Perfil } from "@app/modules/perfiles/entities/perfil.entity";
import { Rol } from "@app/modules/roles/entitties/roles.entity";
import { Permiso } from "@app/modules/permisos/entities/permisos.entity";

export class CrearUsuariodto {

    @IsOptional()
    id: number;

    @IsOptional()
    username: string;

    @IsOptional()
    email: string;

    @IsOptional()
    password: string;
    
    @IsOptional()
    created_at: Date;
    
    @IsOptional()
    updated_at: Date;

    // CHECK: Crear DTOs 
    // @IsOptional()
    // @Type(() => perfilDTO)
    // Perfil: Perfil; // 1 usuario, puede tener 1 perfil

    // @IsOptional()
    // @Type(() => rolDTO)
    // roles: Rol[]; // muchos usuarios, pueden tener muchos roles

    // @IsOptional()
    // @Type(() => permisosDTO)
    // permisos: Permiso[]; // muchos usuarios, pueden tener muchos permisos

}