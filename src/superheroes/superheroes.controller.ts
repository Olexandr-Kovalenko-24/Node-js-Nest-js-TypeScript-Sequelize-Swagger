import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePowerDto } from 'src/superpowers/dto/createPower.dto';
import { CreateHeroDto } from './dto/createHero.dto';
import { UpdateHeroDto } from './dto/updateHero.dto';
import { Superhero } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

@ApiTags('Superheroes')
@Controller('heroes')
export class SuperheroesController {

    constructor(private heroesService: SuperheroesService){

    }

    @ApiOperation({summary: 'Creating superhero'})
    @ApiResponse({status: 201, type: Superhero})
    @Post()
    create(@Body() heroDto: CreateHeroDto) {
        return this.heroesService.createHero(heroDto);
    }

    // @ApiOperation({summary: 'Creating superhero'})
    // @ApiResponse({status: 201, type: Superhero})
    // @Post()
    // create(@Body() heroDto: CreateHeroDto, @Body() powerDto: CreatePowerDto) {
    //     return this.heroesService.createHero(heroDto, powerDto);
    // }

    @ApiOperation({summary: 'Recieve all superheroes'})
    @ApiResponse({status: 200, type: [Superhero]})
    @Get()
    getAll(){
        return this.heroesService.getAllHeroes();
    }

    @ApiOperation({summary: 'Update superheroe'})
    @ApiResponse({status: 200, type: Superhero})
    @Put(':id')
    updateOne(@Param('id') id: string, @Body() heroDto: UpdateHeroDto){
        return this.heroesService.updateHero(heroDto, id);
    }

    @ApiOperation({summary: 'Recieve one superheroe'})
    @ApiResponse({status: 200, type: Superhero})
    @Get(':id')
    getOne(@Param('id') id: string){
        return this.heroesService.getOneHero(id);
    }

    @ApiOperation({summary: 'Delete superheroe'})
    @ApiResponse({status: 204, type: String})
    @Delete(':id')
    deleteOne(@Param('id') id: string){
        return this.heroesService.deleteHero(id);
    }
}
