import { SpecificationDTO } from "../../dto/SpecificationDTO";

interface SpecificationRepository {


    createSpecification ({ name, description }: SpecificationDTO): void
    getAllSpecifications (): SpecificationDTO[]

}

export { SpecificationRepository }