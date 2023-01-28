import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, Table, DataType, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Superhero } from "src/superheroes/superheroes.model";

interface HeroImageCreationAttributs {
    imagePath: string,
    heroId: number
}


@Table({tableName: 'hero_image'})
export class HeroImage extends Model<HeroImage> {
    @ApiProperty({example: '1', description: 'Unique index'})
    @Column({allowNull: false, unique: true, autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
    id: number;

    @ApiProperty({example: '1674134591229.the-hulk.jpg', description: 'Place where the image of the hero stores'})
    @Column({type: DataType.TEXT, allowNull: false})
    imagePath: string;

    @ApiProperty({example: '1', description: 'Unique index of superhero instance'})
    @ForeignKey(() => Superhero)
    @Column({type: DataType.INTEGER})
    heroId: number

    @BelongsTo(() => Superhero)
    owner: Superhero
}