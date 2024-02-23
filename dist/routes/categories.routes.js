"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.post('/', (request, response) => {
    return CategoryController_1.default.createNewCategory(request, response);
});
