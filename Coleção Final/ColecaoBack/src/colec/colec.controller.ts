import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ColecModel } from './colec.model';
import { ColecService } from './colec.service';

@Controller('colec')
export class ColecController {

    constructor(private readonly colecService: ColecService){}

    @Post()
    async createCard(@Body() post: ColecModel): Promise<any> {
        const response = await this.colecService.createCard(post);
        return response
    }
    
    @Get()
    readAllCards(): Promise<any>{
        return this.colecService.readAllCards()
    }

    @Get(':id')
    readAllCardsById( @Param('id') id: string): Promise<any>{
        return this.colecService.readAllCardsById(id)
    }

    @Get('/generation/:generation')
    readAllCardsFromGeneration( @Param('generation') generation: string): Promise<any>{
        return this.colecService.readAllCardsFromGeneration(generation)
    }

    @Patch()
    async updateCard( @Body() colec: ColecModel ): Promise<any>{
        return await this.colecService.updateCard(colec);
    }

    @Delete(':id')
    async deleteCard( @Param('id') id: string ): Promise<any>{
        return await this.colecService.deleteCard(id);
    }

}
