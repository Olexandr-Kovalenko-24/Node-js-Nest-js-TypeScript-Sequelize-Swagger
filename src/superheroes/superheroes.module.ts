import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HeroImage } from 'src/heroimage/heroimage.model';
import { Superpower } from 'src/superpowers/superpowers.model';
import { SuperpowersModule } from 'src/superpowers/superpowers.module';
import { SuperheroesController } from './superheroes.controller';
import { Superhero } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
  imports: [
    SequelizeModule.forFeature([Superhero, Superpower, HeroImage]),
    SuperpowersModule
  ]
})
export class SuperheroesModule {}
