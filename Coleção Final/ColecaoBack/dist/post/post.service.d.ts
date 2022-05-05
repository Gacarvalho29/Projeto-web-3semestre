import { Model } from 'mongoose';
import { InstaPost } from './post.model';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<InstaPost>);
    createPost(post: InstaPost): Promise<{
        statusCode: number;
        message: string;
        response: import("mongoose").Document<any, any, InstaPost> & InstaPost & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    readAllPosts(): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            author: string;
            title: string;
            description: string;
            likes: number;
            id: any;
        }[];
    }>;
    readAllPostsFromAuthor(author: string): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            author: string;
            title: string;
            description: string;
            likes: number;
            id: any;
        }[];
    }>;
    readPostLikesById(id: string): Promise<{
        statusCode: number;
        message: string;
        response: number;
    }>;
    updatePost(post: InstaPost): Promise<any>;
    updatePostLikes(post: InstaPost): Promise<any>;
    deletePost(id: string): Promise<{
        statusCode: number;
        message: string;
        response: any;
    }>;
}
