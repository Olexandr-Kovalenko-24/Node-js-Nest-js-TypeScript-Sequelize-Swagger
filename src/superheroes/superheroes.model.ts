import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, Table, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { HeroImage } from "src/heroimage/heroimage.model";
import { SuperheroesToSuperpowers } from "src/superheroesToSuperpowers/superheroesToSuperpowers.model";
import { Superpower } from "src/superpowers/superpowers.model";

interface SuperheroCreationAttributs {
    nickName: string
}


@Table({tableName: 'superheroes'})
export class Superhero extends Model<Superhero> {
    @ApiProperty({example: '1', description: 'Unique index'})
    @Column({allowNull: false, unique: true, autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
    id: number;

    @ApiProperty({example: 'The Hulk', description: 'Name of superhero'})
    @Column({allowNull: false, unique: true, type: DataType.STRING})
    nickName: string;

    @ApiProperty({example: 'Bruce Banner', description: 'Real name of superhero'})
    @Column({type: DataType.STRING})
    realName: string;

    @ApiProperty({example: "Don't make me angry. You wouldn't like me when I'm angry", description: 'Most known phrase of superhero'})
    @Column({type: DataType.STRING})
    catchPhrase: string;

    @ApiProperty({example: 'Scientist Bruce Banner was caught in a gamma bomb explosion that turned him into the Hulk.', description: 'How superhero appeared'})
    @Column({type: DataType.TEXT})
    originDescription: string;

    @BelongsToMany(() => Superpower, () => SuperheroesToSuperpowers)
    superpowers: Superpower[];

    @HasMany(() => HeroImage)
    images: HeroImage[];
}