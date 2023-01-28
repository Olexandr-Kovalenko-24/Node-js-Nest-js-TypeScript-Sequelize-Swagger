import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateImageDto } from './dto/createImage.dto';
import { HeroImage } from './heroimage.model';

@Injectable()
export class HeroimageService {

    constructor(@InjectModel(HeroImage) private imageRepository: typeof HeroImage,
                private fileService: FilesService){}

    async create(dto: CreateImageDto, imagePath: any){
        const fileName = await this.fileService.createFile(imagePath);
        const createImage = await this.imageRepository.create({...dto, imagePath: fileName});
        return createImage;
    }
}
