import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColecModule } from './colec/colec.module';

@Module({
  imports: [ColecModule, MongooseModule.forRoot('mongodb+srv://grupoColec:mackenzie@projetcolec.xf1o9.mongodb.net/ProjetColec?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
