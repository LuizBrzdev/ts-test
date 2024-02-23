import { SpecificationDTO } from "../../dto/SpecificationDTO";
import { SpecificationModel } from "../../models/SpecificationModel";
import { SpecificationRepository } from "../domain/SpecificationRepository";

class SpecificationRepositoryImpl implements SpecificationRepository {

    #specifications: SpecificationModel[];

    constructor() {
        this.#specifications = [];
    }
    getAllSpecifications (): SpecificationModel[] {
        return this.#specifications;
    }

    public createSpecification ({ name, description }: SpecificationDTO): void {
        const specification = new SpecificationModel(name, description);
        Object.assign(specification, {
            name, description,
        })
        this.#specifications.push(specification);
    }
}

export { SpecificationRepositoryImpl }