import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateImageDto } from './dto/createImage.dto';
import { HeroImage } from './heroimage.model';
import { HeroimageService } from './heroimage.service';

@ApiTags('Superhero images')
@Controller('heroimg')
export class HeroimageController {

    constructor(private imageService: HeroimageService){}

    @ApiOperation({summary: 'Adding superhero image'})
    @ApiResponse({status: 201, type: HeroImage})
    @Post()
    @UseInterceptors(FileInterceptor('imagePath'))
    createImage(@Body() dto: CreateImageDto,
                @UploadedFile() imagePath){
        return this.imageService.create(dto, imagePath)
    }
}
