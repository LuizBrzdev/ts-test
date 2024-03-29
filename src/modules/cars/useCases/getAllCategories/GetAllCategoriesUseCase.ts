import { CategoryDTO } from "../../dto/CategoryDTO";
import { CategoriesRepository } from "../../repositories/domain/CategoriesRepository";

class GetAllCategoriesUseCase {
    constructor(private categoryRepository: CategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    call: () => CategoryDTO[] = () =>
        this.categoryRepository.getAllCategories();
}

export { GetAllCategoriesUseCase }
