import { CategoryDTO } from "../../dto/CategoryDTO"
import { CategoryModel } from "../../models/CategoryModel"
import { CategoriesRepository } from "../domain/CategoriesRepository"

class CategoriesRepositoryImp implements CategoriesRepository {
    private static instance: CategoriesRepositoryImp;

    #categories: CategoryModel[]

    private constructor() {
        this.#categories = []
    }

    public static getInstance (): CategoriesRepositoryImp {
        if (!CategoriesRepositoryImp.instance) {
            CategoriesRepositoryImp.instance = new CategoriesRepositoryImp();
        }
        return CategoriesRepositoryImp.instance;
    }

    public createCategory ({ name, description }: CategoryDTO): void {
        const category = new CategoryModel(name, description)
        Object.assign(category, {
            name,
            description,
        })
        this.#categories.push(category)
    }

    public getAllCategories (): CategoryModel[] {
        return this.#categories
    }

    public alreadyExist (name: string): boolean {
        return this.#categories.some(category => category.name === name);
    }
}

export { CategoriesRepositoryImp }