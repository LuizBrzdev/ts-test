"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const return_utils_1 = require("../../../utils/return-utils");
const CreateCategoryUseCase_1 = require("../useCases/createCategory/CreateCategoryUseCase");
const CategoriesRepositoryImp_1 = require("../repositories/data/CategoriesRepositoryImp");
const GetAllCategoriesUseCase_1 = require("../useCases/getAllCategories/GetAllCategoriesUseCase");
class CategoryController {
    constructor(getAllCategoriesUseCase, createCategoryUseCase) {
        this.getAllCategoriesUseCase = getAllCategoriesUseCase;
        this.createCategoryUseCase = createCategoryUseCase;
        this.createCategoryUseCase = createCategoryUseCase;
    }
    createNewCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = {
                name: request.body.name,
                description: request.body.description,
            };
            this.createCategoryUseCase.call(category);
            return (0, return_utils_1.sendReturn)(response, response.statusCode, response.statusMessage, category);
        });
    }
    getAllCategories(response) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, return_utils_1.sendReturn)(response, response.statusCode, 'Data found', this.getAllCategoriesUseCase.getAllCategories());
        });
    }
}
const categoryRepository = CategoriesRepositoryImp_1.CategoriesRepositoryImp.getInstance();
const getAllCategoriesUseCase = new GetAllCategoriesUseCase_1.GetAllCategoriesUseCase(categoryRepository);
const createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoryRepository);
const categoryController = new CategoryController(getAllCategoriesUseCase, createCategoryUseCase);
exports.categoryController = categoryController;
