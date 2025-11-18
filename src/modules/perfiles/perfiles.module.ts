import { Module } from '@nestjs/common';
import { PerfilesController } from './perfiles.controller';
import { PerfilesService } from './perfiles.service';
import { Perfil } from './entities/perfil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil])],
  controllers: [PerfilesController],
  providers: [PerfilesService],
  exports: [PerfilesService]
})
export class PerfilesModule {}
