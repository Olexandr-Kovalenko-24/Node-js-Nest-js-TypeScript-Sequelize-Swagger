import { ApiProperty } from "@nestjs/swagger";

export class UpdateHeroDto {
    @ApiProperty({example: 'The Hulk', description: 'Name of superhero'})
    readonly nickName: string;
}