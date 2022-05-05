import { InstaPost } from './post.model';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createPost(post: InstaPost): Promise<any>;
    readAllPosts(): Promise<any>;
    readAllPostsFromAuthor(author: string): Promise<any>;
    readPostLikesById(id: string): Promise<any>;
    updatePost(post: InstaPost): Promise<any>;
    updatePostLikes(post: InstaPost): Promise<any>;
    deletePost(id: string): Promise<any>;
}
