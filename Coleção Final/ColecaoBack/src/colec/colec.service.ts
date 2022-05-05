import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ColecModel } from './colec.model';

@Injectable()
export class ColecService {

    constructor( @InjectModel('Colec') private readonly colecModel: Model<ColecModel>) {}
        
     

    // C - CREATE
    async createCard(colec: ColecModel){
        const colecModel = new this.colecModel(
            {
                url: colec.url,
                generation: colec.generation,
                pokename: colec.pokename,
                tipo: colec.tipo,
            }
        );
        const result = await colecModel.save();
        const dbresponse = {
            statusCode: 200,
            message: 'Card created',
            response: result
        }
        return dbresponse
    }

    // R - READ
    async readAllCards(){
        const colecs = await this.colecModel.find().exec();
        const result = colecs.map(colec => ({
            url: colec.url,
            generation: colec.generation,
            pokename: colec.pokename,
            tipo: colec.tipo,
            id: colec._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: 'Cards found',
            response: result
        }
        return dbresponse
    }

    async readAllCardsById(id: string){
        const colecs = await this.colecModel.find({_id: id}).exec();
        const result = colecs.map(colec => ({
            url: colec.url,
            generation: colec.generation,
            pokename: colec.pokename,
            tipo: colec.tipo,
            id: colec._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: 'Card by id found!',
            response: result
        }
        return dbresponse
    }

    async readAllCardsFromGeneration(generation: string){
        const colecs = await this.colecModel.find({generation: generation}).exec();
        const result = colecs.map(colec => ({
            url: colec.url,
            generation: colec.generation,
            pokename: colec.pokename,
            tipo: colec.tipo,
            id: colec._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: 'Colections from generation found',
            response: result
        }
        return dbresponse
    }

    // U - UPDATE
    async updateCard(newCard: ColecModel): Promise<any>{
        const updateCard = await this.colecModel.findOne({_id: newCard.id});
        if (!newCard){
            throw new NotFoundException('Cards should not be null');
        }
        if (newCard.pokename){
            updateCard.pokename = newCard.pokename;
        }
        if (newCard.generation){
            updateCard.generation = newCard.generation;
        }
        if (newCard.tipo){
            updateCard.tipo = newCard.tipo;
        }
        if (newCard.url){
            updateCard.url = newCard.url;
        }
        updateCard.save();
        const result = updateCard;
        const dbresponse = {
            statusCode: 200,
            message: 'Card updated',
            response: result
        }
        return dbresponse
    }

    // D - DELETE
    async deleteCard(id: string){
        const response = await this.colecModel.deleteOne({_id: id}).exec();
        if (response.deletedCount == 0){
            throw new NotFoundException('Could not delete the post');
        }
        return {
            statusCode: 200, 
            message: "Post deleted!", 
            response: null
        }
    }
}

