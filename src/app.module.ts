import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Superhero } from "./superheroes/superheroes.modele";
import { SuperheroesModule } from './superheroes/superheroes.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: `${process.env.POSTGRES_PASSWORD}`,
            database: process.env.POSTGRES_DB,
            models: [Superhero],
            autoLoadModels: true
          }),
        SuperheroesModule,
    ]
})
export class AppModule {}