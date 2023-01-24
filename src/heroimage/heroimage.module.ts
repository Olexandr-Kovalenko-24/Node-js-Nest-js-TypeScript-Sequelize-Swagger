import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero } from 'src/superheroes/superheroes.model';
import { HeroimageController } from './heroimage.controller';
import { HeroImage } from './heroimage.model';
import { HeroimageService } from './heroimage.service';

@Module({
  controllers: [HeroimageController],
  providers: [HeroimageService],
  imports: [
    SequelizeModule.forFeature([Superhero, HeroImage])
  ]
})
export class HeroimageModule {}
