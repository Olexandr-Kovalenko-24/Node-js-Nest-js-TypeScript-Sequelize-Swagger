import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
    .setTitle('Creating Superheroes with nest js')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('Nest js')
    .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()