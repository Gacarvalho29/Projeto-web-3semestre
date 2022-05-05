import * as mongoose from 'mongoose';
export declare const ColecSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface ColecModel {
    url: string;
    generation: string;
    pokename: string;
    tipo: string;
    id: string;
}
