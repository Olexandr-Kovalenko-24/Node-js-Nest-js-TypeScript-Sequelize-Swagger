import { Module } from '@nestjs/common';
import { SuperpowersService } from './superpowers.service';
import { SuperpowersController } from './superpowers.controller';
import { Superpower } from './superpowers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero } from 'src/superheroes/superheroes.model';

@Module({
  providers: [SuperpowersService],
  controllers: [SuperpowersController],
  imports: [
    SequelizeModule.forFeature([Superpower, Superhero])
  ],
  exports: [
    SuperpowersService
  ]
})
export class SuperpowersModule {}
