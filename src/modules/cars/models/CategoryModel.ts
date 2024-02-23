import { v4 as uuidV4 } from 'uuid';


class CategoryModel {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date;

    constructor(name: string, description: string, createdAt?: Date, id?: string) {
        this.id = id || uuidV4();
        this.name = name;
        this.description = description;
        this.createdAt = createdAt || new Date();
    }
}
export { CategoryModel }