import { Column, Model, Table, DataType } from "sequelize-typescript";

interface SuperheroCreationAttributs {
    nickName: string
}


@Table({tableName: 'superheroes'})
export class Superhero extends Model<Superhero> {
    @Column({allowNull: false, unique: true, autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
    id: number;

    @Column({allowNull: false, unique: true, type: DataType.STRING})
    nickName: string;

    @Column({type: DataType.STRING})
    realName: string;

    @Column({type: DataType.STRING})
    catchPhrase: string;

    @Column({type: DataType.TEXT})
    originDescription: string;
}