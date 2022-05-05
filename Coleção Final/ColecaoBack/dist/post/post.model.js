"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose = require("mongoose");
exports.PostSchema = new mongoose.Schema({
    url: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, required: true }
});
;
//# sourceMappingURL=post.model.js.map