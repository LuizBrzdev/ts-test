
import { CategoriesRepository } from "../../repositories/domain/CategoriesRepository";


interface RequestBody {
    name: string,
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoryRepository: CategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    call ({ name, description }: RequestBody): void {
        const alreadyExists = this.categoryRepository.alreadyExist(name)
        if (alreadyExists) {
            throw new Error("Já existe uma categoria com esse nome");
        };
        this.categoryRepository.createCategory({ name: name, description: description })
    }

}

export { CreateCategoryUseCase }