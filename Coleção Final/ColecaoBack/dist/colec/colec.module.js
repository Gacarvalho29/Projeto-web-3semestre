"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColecModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const colec_controller_1 = require("./colec.controller");
const colec_model_1 = require("./colec.model");
const colec_service_1 = require("./colec.service");
let ColecModule = class ColecModule {
};
ColecModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Colec', schema: colec_model_1.ColecSchema }])],
        controllers: [colec_controller_1.ColecController],
        providers: [colec_service_1.ColecService]
    })
], ColecModule);
exports.ColecModule = ColecModule;
//# sourceMappingURL=colec.module.js.map