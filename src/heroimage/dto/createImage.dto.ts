import { ApiProperty } from "@nestjs/swagger";

export class CreateImageDto {
    @ApiProperty({example: '1', description: 'Id of the superhero'})
    readonly heroId: number;
}