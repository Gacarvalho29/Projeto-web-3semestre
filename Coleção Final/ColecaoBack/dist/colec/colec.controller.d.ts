import { ColecModel } from './colec.model';
import { ColecService } from './colec.service';
export declare class ColecController {
    private readonly colecService;
    constructor(colecService: ColecService);
    createCard(post: ColecModel): Promise<any>;
    readAllCards(): Promise<any>;
    readAllCardsById(id: string): Promise<any>;
    readAllCardsFromGeneration(generation: string): Promise<any>;
    updateCard(colec: ColecModel): Promise<any>;
    deleteCard(id: string): Promise<any>;
}
