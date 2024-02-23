import { CategoryDTO } from "../../dto/CategoryDTO"


interface CategoriesRepository {
    createCategory ({ name, description }: CategoryDTO): void;
    getAllCategories (): CategoryDTO[];
    alreadyExist (name: string): boolean;
}

export { CategoriesRepository } 