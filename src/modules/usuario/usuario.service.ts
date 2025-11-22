import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';
import { PerfilesService } from '../perfiles/perfiles.service';
import { PermisosService } from '../permisos/permisos.service';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsuarioService {

  constructor (
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly perfilService: PerfilesService,
    private readonly rolService: RolesService,
    private readonly permisoService: PermisosService
  ){}

  //* READ
  async findOne(id: number){
    const usuario = await this.usuarioRepository.findOne({
      where: {id}
    })
    return usuario;
  }
  
  async findAll(){
    const usuarios = await this.usuarioRepository.find({
    })
    return usuarios;
  }

  //* CREATE - UPDATE - DELETE
  async new(usuarioDTO: any){
    
    //* Caso 1: cascade = true for (perfiles/permisos/roles)
    const usuarioEntity = this.usuarioRepository.create(usuarioDTO);
    await this.usuarioRepository.save(usuarioEntity)
    
    // IMPORTANT: piensa en la logica del primaryKey del usuario, con los perfiles, roles y permisos
    const perfil = await this.perfilService.findOne(usuarioDTO.perfil);
  }

  // TODO 
  async update(){}

  async delete(id: string){
    // const query = this.usuarioRepository.createQueryBuilder('usuario');
    // usuarioid =
    
    // try {
    //   return await query
    //               .delete()
    //               .where({ usuario. })
    //               .execute;

    // } catch (error){
      
    //   //? Ingresar un logger?
    //   console.log(error);
    // }
  }

  async deleteAll(){
    const query = this.usuarioRepository.createQueryBuilder('usuario');
    
    try {
      return await query.delete().execute;

    } catch (error){
      
      //? Ingresar un logger?
      console.log(error);
    }
  }

}
