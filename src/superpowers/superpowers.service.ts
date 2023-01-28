import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePowerDto } from './dto/createPower.dto';
import { Superpower } from './superpowers.model';

@Injectable()
export class SuperpowersService {
    constructor(@InjectModel(Superpower) private powerRepository: typeof Superpower) {}

    async createPower (dto: CreatePowerDto) {
        const power = await this.powerRepository.create(dto);
        return power;
    }
}
