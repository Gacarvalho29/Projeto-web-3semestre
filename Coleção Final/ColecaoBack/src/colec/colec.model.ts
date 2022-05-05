/*
Post - url, generation, pokename, tipo
*/
import * as mongoose from 'mongoose';

export const ColecSchema = new mongoose.Schema({
    url: {type: String, required: true},
    generation: {type: String, required: true},
    pokename: {type: String, required: true},
    tipo: {type: String, required: true},
});

export interface ColecModel{
    url: string,
    generation: string,
    pokename: string,
    tipo: string,
    id: string
};