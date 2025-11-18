import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';

@Controller('Perfil')
export class PerfilesController {

  constructor(private readonly perfilesService: PerfilesService) {}

  //* Gets:
  @Get('all')
  getAllPerfiles() {
    return this.perfilesService.findAll();
  }

  @Get(':id')
  getPerfil(@Param('id') id: string) {
    return this.perfilesService.findOne(id);
  }

  //* Posts:
  //CHECK: insertar Dto
  @Post()
  createPerfil(@Body() perfilDto: any) {
  }

  //CHECK: insertar Dto
  @Put(':id')
  updatePerfil(@Param('id') id: string, @Body() perfilDto: any) {
  }

  @Delete(':id')
  deletePerfil(@Param('id') id: string) {
  }

}
