import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

  constructor(private readonly rolesService: RolesService) {}

  //* Gets
  @Get('all')
  getAllRoles() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  getRol(@Param('id', ParseIntPipe) id: number) {
    return this.rolesService.findOne(id);
  }

  //* Posts
  //CHECK: insertar Dto
  @Post()
  createRol(@Body() rolDto: any) {
  }

  //CHECK: insertar Dto
  @Put(':id')
  updateRol(@Param('id', ParseIntPipe) id: number, @Body() rolDto: any) {
  }

  @Delete(':id')
  deleteRol(@Param('id', ParseIntPipe) id: number) {
  }

}
