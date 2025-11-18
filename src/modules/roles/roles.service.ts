import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Rol } from './entitties/roles.entity';

@Injectable()
export class RolesService {

  constructor (
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ){}
    
  //* READ
  async findOne(id: number){
    const rol = await this.rolRepository.findOne({
      where: {id}
    })
    return rol;
  }
  async findAll(){
    const roles = await this.rolRepository.find({
    })
    return roles;
  }

  //* CREATE - UPDATE - DELETE
  create (rol: any){
    return this.rolRepository.create(rol);
  }
  async new(rolDTO: any){
    const rolEntity = this.rolRepository.create(rolDTO);
    await this.rolRepository.save(rolEntity)
  }

  async update(){}

  async delete(){}

  async deleteAll(){}

}
