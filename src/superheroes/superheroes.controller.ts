import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateHeroDto } from './dto/createHero.dto';
import { SuperheroesService } from './superheroes.service';

@Controller('heroes')
export class SuperheroesController {

    constructor(private heroesService: SuperheroesService){

    }

    @Post()
    create(@Body() heroDto: CreateHeroDto) {
        return this.heroesService.createHero(heroDto);
    }

    @Get()
    getAll(){
        return this.heroesService.getAlHeroes();
    }
}
