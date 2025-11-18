import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilesService {

  constructor (
    @InjectRepository(Perfil)
    private readonly perfilRepository: Repository<Perfil>,
  ){}
  
  //* READ
  async findOne(id: string){
    const perfil = await this.perfilRepository.findOne({
      where: {id}
    })
    return perfil;
  }
  async findAll(){
    const perfiles = await this.perfilRepository.find({
    })
    return perfiles;
  }

  //* CREATE - UPDATE - DELETE
  create (perfil: any){
    return this.perfilRepository.create(perfil); //? Es necesario crear el metodo, simplemente, por que mejor, no usar el repositorio directamente?
  }
  async new(perfilDTO: any){
    const perfilEntity = this.perfilRepository.create(perfilDTO);
    await this.perfilRepository.save(perfilEntity)
  }

  async update(){}

  async delete(){}

  async deleteAll(){}
}
