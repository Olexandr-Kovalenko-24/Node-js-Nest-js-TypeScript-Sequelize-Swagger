import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateImageDto } from './dto/createImage.dto';
import { HeroimageService } from './heroimage.service';

@Controller('heroimg')
export class HeroimageController {

    constructor(private imageService: HeroimageService){}

    @Post()
    @UseInterceptors(FileInterceptor('imagePath'))
    createImage(@Body() dto: CreateImageDto,
                @UploadedFile() imagePath){
        return this.imageService.create(dto, imagePath)
    }
}
