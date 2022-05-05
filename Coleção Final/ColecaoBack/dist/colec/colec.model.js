"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColecSchema = void 0;
const mongoose = require("mongoose");
exports.ColecSchema = new mongoose.Schema({
    url: { type: String, required: true },
    generation: { type: String, required: true },
    pokename: { type: String, required: true },
    tipo: { type: String, required: true },
});
;
//# sourceMappingURL=colec.model.js.map