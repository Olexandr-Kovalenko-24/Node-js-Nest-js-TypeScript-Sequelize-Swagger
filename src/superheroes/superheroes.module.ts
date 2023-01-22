import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SuperheroesController } from './superheroes.controller';
import { Superhero } from './superheroes.modele';
import { SuperheroesService } from './superheroes.service';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
  imports: [
    SequelizeModule.forFeature([Superhero])
  ]
})
export class SuperheroesModule {}
