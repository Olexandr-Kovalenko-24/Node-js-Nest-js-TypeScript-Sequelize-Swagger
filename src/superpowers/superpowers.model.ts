import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, Table, DataType, BelongsToMany } from "sequelize-typescript";
import { Superhero } from "src/superheroes/superheroes.model";
import { SuperheroesToSuperpowers } from "src/superheroesToSuperpowers/superheroesToSuperpowers.model";

interface SuperpowerCreationAttributs {
    powerName: string
}


@Table({tableName: 'superpowers'})
export class Superpower extends Model<Superpower> {
    
    @ApiProperty({example: '1', description: 'Unique index'})
    @Column({allowNull: false, unique: true, autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
    id: number;

    @ApiProperty({example: 'Fly', description: 'What cool superhero may do'})
    @Column({allowNull: false, unique: true, type: DataType.TEXT})
    powerName: string;

    @BelongsToMany(() => Superhero, () => SuperheroesToSuperpowers)
    superheroes: Superhero[];
}