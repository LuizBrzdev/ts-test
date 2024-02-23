"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const CategoryController_1 = require("../controllers/CategoryController");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.post('/createCategory', (request, response) => {
    return CategoryController_1.categoryController.createNewCategory(request, response);
});
categoriesRoutes.get('/', (request, response) => {
    return CategoryController_1.categoryController.getAllCategories(response);
});
