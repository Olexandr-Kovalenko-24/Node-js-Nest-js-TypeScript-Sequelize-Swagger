import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Superhero } from "src/superheroes/superheroes.model";
import { Superpower } from "src/superpowers/superpowers.model";



@Table({tableName: 'superheroes_to_superpowers', createdAt: false, updatedAt: false})
export class SuperheroesToSuperpowers extends Model<SuperheroesToSuperpowers> {

    @Column({allowNull: false, unique: true, autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
    id: number;

    @ForeignKey(() => Superhero)
    @Column({type: DataType.INTEGER})
    superheroId: number;

    @ForeignKey(() => Superpower)
    @Column({type: DataType.INTEGER})
    superpowerId: number;

}