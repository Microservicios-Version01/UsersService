import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from './entities/usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

import { PerfilesModule } from '../perfiles/perfiles.module';
import { PermisosModule } from '../permisos/permisos.module';
import { RolesModule } from '../roles/roles.module';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), PerfilesModule, PermisosModule, RolesModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
