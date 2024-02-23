"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesUseCase = void 0;
class GetAllCategoriesUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
        this.getAllCategories = () => this.categoryRepository.getAllCategories();
        this.categoryRepository = categoryRepository;
    }
}
exports.GetAllCategoriesUseCase = GetAllCategoriesUseCase;
