import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superpower } from 'src/superpowers/superpowers.model';
import { SuperheroesController } from './superheroes.controller';
import { Superhero } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
  imports: [
    SequelizeModule.forFeature([Superhero, Superpower])
  ]
})
export class SuperheroesModule {}
