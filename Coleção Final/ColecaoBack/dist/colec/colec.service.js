"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColecService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ColecService = class ColecService {
    constructor(colecModel) {
        this.colecModel = colecModel;
    }
    async createCard(colec) {
        const colecModel = new this.colecModel({
            url: colec.url,
            generation: colec.generation,
            pokename: colec.pokename,
            tipo: colec.tipo,
        });
        const result = await colecModel.save();
        const dbresponse = {
            statusCode: 200,
            message: 'Card created',
            response: result
        };
        return dbresponse;
    }
    async readAllCards() {
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
        };
        return dbresponse;
    }
    async readAllCardsById(id) {
        const colecs = await this.colecModel.find({ _id: id }).exec();
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
        };
        return dbresponse;
    }
    async readAllCardsFromGeneration(generation) {
        const colecs = await this.colecModel.find({ generation: generation }).exec();
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
        };
        return dbresponse;
    }
    async updateCard(newCard) {
        const updateCard = await this.colecModel.findOne({ _id: newCard.id });
        if (!newCard) {
            throw new common_1.NotFoundException('Cards should not be null');
        }
        if (newCard.pokename) {
            updateCard.pokename = newCard.pokename;
        }
        if (newCard.generation) {
            updateCard.generation = newCard.generation;
        }
        if (newCard.tipo) {
            updateCard.tipo = newCard.tipo;
        }
        if (newCard.url) {
            updateCard.url = newCard.url;
        }
        updateCard.save();
        const result = updateCard;
        const dbresponse = {
            statusCode: 200,
            message: 'Card updated',
            response: result
        };
        return dbresponse;
    }
    async deleteCard(id) {
        const response = await this.colecModel.deleteOne({ _id: id }).exec();
        if (response.deletedCount == 0) {
            throw new common_1.NotFoundException('Could not delete the post');
        }
        return {
            statusCode: 200,
            message: "Post deleted!",
            response: null
        };
    }
};
ColecService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Colec')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ColecService);
exports.ColecService = ColecService;
//# sourceMappingURL=colec.service.js.map