import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateHeroDto } from './dto/createHero.dto';
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

    @ApiOperation({summary: 'Recieve all superheroes'})
    @ApiResponse({status: 200, type: [Superhero]})
    @Get()
    getAll(){
        return this.heroesService.getAllHeroes();
    }
}
