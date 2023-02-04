import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePowerDto } from 'src/superpowers/dto/createPower.dto';
import { SuperpowersService } from 'src/superpowers/superpowers.service';
import { CreateHeroDto } from './dto/createHero.dto';
import { UpdateHeroDto } from './dto/updateHero.dto';
import { Superhero } from './superheroes.model';

@Injectable()
export class SuperheroesService {

    constructor(@InjectModel(Superhero) private heroRepository: typeof Superhero,
    private powerService: SuperpowersService) {}

    async createHero (dto: CreateHeroDto) {
        const hero = await this.heroRepository.create(dto);
        return hero;
    }

    async createHeroWithPower (dto: CreateHeroDto, powerDto: CreatePowerDto) {
        const hero = await this.heroRepository.create(dto);
        const power = await this.powerService.createPower(powerDto);
        await hero.$set('superpowers', [power.id]);
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
