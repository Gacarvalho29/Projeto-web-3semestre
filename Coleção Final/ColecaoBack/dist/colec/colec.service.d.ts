import { Model } from 'mongoose';
import { ColecModel } from './colec.model';
export declare class ColecService {
    private readonly colecModel;
    constructor(colecModel: Model<ColecModel>);
    createCard(colec: ColecModel): Promise<{
        statusCode: number;
        message: string;
        response: import("mongoose").Document<any, any, ColecModel> & ColecModel & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    readAllCards(): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            generation: string;
            pokename: string;
            tipo: string;
            id: any;
        }[];
    }>;
    readAllCardsById(id: string): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            generation: string;
            pokename: string;
            tipo: string;
            id: any;
        }[];
    }>;
    readAllCardsFromGeneration(generation: string): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            generation: string;
            pokename: string;
            tipo: string;
            id: any;
        }[];
    }>;
    updateCard(newCard: ColecModel): Promise<any>;
    deleteCard(id: string): Promise<{
        statusCode: number;
        message: string;
        response: any;
    }>;
}
