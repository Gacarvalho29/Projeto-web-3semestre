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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async createPost(post) {
        const postModel = new this.postModel({
            url: post.url,
            author: post.author,
            title: post.title,
            description: post.description,
            likes: post.likes
        });
        const result = await postModel.save();
        const dbresponse = {
            statusCode: 200,
            message: 'Post created',
            response: result
        };
        return dbresponse;
    }
    async readAllPosts() {
        const posts = await this.postModel.find().exec();
        const result = posts.map(post => ({
            url: post.url,
            author: post.author,
            title: post.title,
            description: post.description,
            likes: post.likes,
            id: post._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: 'Posts found',
            response: result
        };
        return dbresponse;
    }
    async readAllPostsFromAuthor(author) {
        const posts = await this.postModel.find({ author: author }).exec();
        const result = posts.map(post => ({
            url: post.url,
            author: post.author,
            title: post.title,
            description: post.description,
            likes: post.likes,
            id: post._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: 'Posts found',
            response: result
        };
        return dbresponse;
    }
    async readPostLikesById(id) {
        const post = await this.postModel.findOne({ _id: id }).exec();
        const result = post.likes;
        const dbresponse = {
            statusCode: 200,
            message: 'Likes from post',
            response: result
        };
        return dbresponse;
    }
    async updatePost(post) {
        if (!post) {
            throw new common_1.NotFoundException('Post should not be null');
        }
        const updatedPost = await this.postModel.findOne({ _id: post.id });
        if (post.title) {
            updatedPost.title = post.title;
        }
        if (post.author) {
            updatedPost.author = post.author;
        }
        if (post.description) {
            updatedPost.description = post.description;
        }
        if (post.url) {
            updatedPost.url = post.url;
        }
        if (post.likes) {
            updatedPost.likes = post.likes;
        }
        updatedPost.save();
        const result = updatedPost;
        const dbresponse = {
            statusCode: 200,
            message: 'Post updated',
            response: result
        };
        return dbresponse;
    }
    async updatePostLikes(post) {
        if (!post) {
            throw new common_1.NotFoundException('Post should not be null');
        }
        const updatedPost = await this.postModel.findOne({ _id: post.id });
        if (post.id) {
            updatedPost.likes += 1;
        }
        updatedPost.save();
        const result = updatedPost;
        const dbresponse = {
            statusCode: 200,
            message: 'Post likes updated',
            response: result
        };
        return dbresponse;
    }
    async deletePost(id) {
        const response = await this.postModel.deleteOne({ _id: id }).exec();
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
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Post')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map