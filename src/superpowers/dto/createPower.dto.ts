import { ApiProperty } from "@nestjs/swagger";

export class CreatePowerDto {
    @ApiProperty({example: 'Weather manipulation', description: 'The power of superhero'})
    readonly powerName: string;
}