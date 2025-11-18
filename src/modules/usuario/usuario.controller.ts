import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}
  // NOTE: Se le puede añadir pipelines a este controller?
    //* Gets:
    @Get('all')
    getAllUsuarios() {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    getUsuario(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.findOne(id);
    }

    //* Posts:
    // OJO: return en el post
    /* Se le puede retornar datos al cliente (con un return), 
     si es que se quiere confirmar de la creacion,actualizacion, etc del dato */
    //CHECK: insertar Dto
    @Post()
    createUsuario(@Body() usuarioDto: any) {
    }

    //CHECK: insertar Dto
    @Put(':id')
    updateUsuario(@Param('id') id: string, @Body() usuarioDto: any) {

    }

    @Delete(':id')
    deleteUsuario(@Param('id') id: string) {

    }
}
