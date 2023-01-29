import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Superhero } from "./superheroes/superheroes.model";
import { SuperheroesModule } from './superheroes/superheroes.module';
import { SuperheroesToSuperpowers } from "./superheroesToSuperpowers/superheroesToSuperpowers.model";
import { Superpower } from "./superpowers/superpowers.model";
import { SuperpowersModule } from './superpowers/superpowers.module';
import { HeroimageModule } from './heroimage/heroimage.module';
import { HeroImage } from "./heroimage/heroimage.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: `${process.env.POSTGRES_PASSWORD}`,
            database: process.env.POSTGRES_DB,
            models: [Superhero, Superpower, SuperheroesToSuperpowers, HeroImage],
            autoLoadModels: true
          }),
        SuperheroesModule,
        SuperpowersModule,
        HeroimageModule,
        FilesModule,
    ]
})
export class AppModule {}