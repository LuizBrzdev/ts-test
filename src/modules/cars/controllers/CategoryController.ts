import { Request, Response } from "express";

import { sendReturn } from '../../../utils/return-utils';
import { CategoryDTO } from "../dto/CategoryDTO";
import { CreateCategoryUseCase } from "../useCases/createCategory/CreateCategoryUseCase";
import { CategoriesRepositoryImp } from "../repositories/data/CategoriesRepositoryImp";
import { GetAllCategoriesUseCase } from "../useCases/getAllCategories/GetAllCategoriesUseCase";





class CategoryController {

    constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase, private createCategoryUseCase: CreateCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
        this.getAllCategoriesUseCase = getAllCategoriesUseCase
    }

    public async createNewCategory (request: Request, response: Response) {
        const category: CategoryDTO = {
            name: request.body.name,
            description: request.body.description,
        }
        this.createCategoryUseCase.call(category);
        return sendReturn(response, response.statusCode, response.statusMessage, category)
    }

    public async getAllCategories (response: Response) {
        const categories = this.getAllCategoriesUseCase.call();
        return sendReturn(response, response.statusCode, 'Data found', categories);
    }



}


const categoryRepository = CategoriesRepositoryImp.getInstance()

const getAllCategoriesUseCase = new GetAllCategoriesUseCase(
    categoryRepository
);

const createCategoryUseCase = new CreateCategoryUseCase(
    categoryRepository
);

const categoryController = new CategoryController(
    getAllCategoriesUseCase,
    createCategoryUseCase
);

export { categoryController };




