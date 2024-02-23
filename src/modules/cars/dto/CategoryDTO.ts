import { CategoryModel } from "../models/CategoryModel";


interface CategoryDTO extends CategoryModel {
    name: string;
    description: string;
}

export { CategoryDTO }