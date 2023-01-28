import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePowerDto } from './dto/createPower.dto';
import { Superpower } from './superpowers.model';
import { SuperpowersService } from './superpowers.service';

@ApiTags('Superpowers')
@Controller('powers')
export class SuperpowersController {
    constructor(private powersService: SuperpowersService){}

    @ApiOperation({summary: 'Creating superpower'})
    @ApiResponse({status: 201, type: Superpower})
    @Post()
    create(@Body() powerDto: CreatePowerDto) {
        return this.powersService.createPower(powerDto)
    }
}
