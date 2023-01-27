import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHeroDto } from './dto/createHero.dto';
import { UpdateHeroDto } from './dto/updateHero.dto';
import { Superhero } from './superheroes.model';

@Injectable()
export class SuperheroesService {

    constructor(@InjectModel(Superhero) private heroRepository: typeof Superhero) {}

    async createHero (dto: CreateHeroDto) {
        const hero = await this.heroRepository.create(dto);
        return hero;
    }

    async getAllHeroes () {
        const heroes = await this.heroRepository.findAll({include: {all: true}});
        return heroes;
    }

    async updateHero (dto: UpdateHeroDto, heroId: string) {
        const [rowCount, [updatedHero]] = await this.heroRepository.update(dto, {
            where: {
                id: heroId
            },
            returning: true
        });
        return updatedHero;
    }

    async getOneHero (id: string) {
        const findedHero = await this.heroRepository.findByPk(id);
        return findedHero;
    }

    async deleteHero (id: string) {
        const findedHero = await this.heroRepository.findByPk(id);
        const deletedHero = await findedHero.destroy();
        return 'Delete superheroe';
    }
}
