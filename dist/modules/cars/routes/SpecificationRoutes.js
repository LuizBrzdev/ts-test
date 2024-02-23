"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationRoutes = void 0;
const express_1 = require("express");
const SpecificationController_1 = __importDefault(require("../controllers/SpecificationController"));
const specificationRoutes = (0, express_1.Router)();
exports.specificationRoutes = specificationRoutes;
specificationRoutes.post('/createSpecification', (request, response) => SpecificationController_1.default.createSpecification(request, response));
specificationRoutes.get('/', (request, response) => SpecificationController_1.default.getAllSpecifications(request, response));
