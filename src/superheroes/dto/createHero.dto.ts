import { ApiProperty } from "@nestjs/swagger";

export class CreateHeroDto {
    @ApiProperty({example: 'The Hulk', description: 'Name of superhero'})
    readonly nickName: string;
}