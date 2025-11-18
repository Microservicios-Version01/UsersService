import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Permiso } from './entities/permisos.entity';

@Injectable()
export class PermisosService {

  constructor (
    @InjectRepository(Permiso)
    private readonly permisoRepository: Repository<Permiso>,
  ){}
    
  //* READ
  async findOne(id: number){
    const permiso = await this.permisoRepository.findOne({
      where: {id}
    })
    return permiso;
  }
  async findAll(){
    const permisos = await this.permisoRepository.find({
    })
    return permisos;
  }

  //* CREATE - UPDATE - DELETE
  create (permiso: any){
    return this.permisoRepository.create(permiso);
  }
  async new(permisoDTO: any){
    const permisoEntity = this.permisoRepository.create(permisoDTO);
    await this.permisoRepository.save(permisoEntity)
  }

  async update(){}

  async delete(){}

  async deleteAll(){}

}
