import * as mongoose from 'mongoose';
export declare const PostSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface InstaPost {
    url: string;
    author: string;
    title: string;
    description: string;
    likes: number;
    id: string;
}
