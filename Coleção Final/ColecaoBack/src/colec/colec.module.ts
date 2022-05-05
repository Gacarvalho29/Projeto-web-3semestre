import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColecController } from './colec.controller';
import { ColecSchema } from './colec.model';
import { ColecService } from './colec.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Colec', schema: ColecSchema}])],
  controllers: [ColecController],
  providers: [ColecService]
})
export class ColecModule {}
