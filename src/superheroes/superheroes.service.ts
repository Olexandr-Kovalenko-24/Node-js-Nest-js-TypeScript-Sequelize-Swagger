import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHeroDto } from './dto/createHero.dto';
import { Superhero } from './superheroes.model';

@Injectable()
export class SuperheroesService {

    constructor(@InjectModel(Superhero) private heroRepository: typeof Superhero) {}

    async createHero (dto: CreateHeroDto) {
        const hero = await this.heroRepository.create(dto);
        return hero;
    }

    async getAlHeroes () {
        const heroes = await this.heroRepository.findAll();
        return heroes;
    }
}
