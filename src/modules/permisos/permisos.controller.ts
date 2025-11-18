import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PermisosService } from './permisos.service';

@Controller('permisos')
export class PermisosController {
  
  constructor(private readonly permisosService: PermisosService) {}

  //* Gets:
  @Get('all')
  getAllPermisos() {
    return this.permisosService.findAll();
  }

  @Get(':id')
  getPermiso(@Param('id', ParseIntPipe) id: number) {
    return this.permisosService.findOne(id);
  }

  //* Posts:
  //CHECK: insertar Dto
  @Post()
  createPermiso(@Body() permisoDto: any) {
  }

  //CHECK: insertar Dto
  @Put(':id')
  updatePermiso(@Param('id', ParseIntPipe) id: number, @Body() permisoDto: any) {
  }

  @Delete(':id')
  deletePermiso(@Param('id', ParseIntPipe) id: number) {
  }

}