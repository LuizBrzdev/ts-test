"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
class CreateCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
        this.categoryRepository = categoryRepository;
    }
    call({ name, description }) {
        const alreadyExists = this.categoryRepository.alreadyExist(name);
        console.log(alreadyExists);
        if (alreadyExists) {
            throw new Error("Já existe uma categoria com esse nome");
        }
        ;
        this.categoryRepository.createCategory({ name: name, description: description });
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
