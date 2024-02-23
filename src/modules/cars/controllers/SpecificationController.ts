import { sendReturn } from "../../../utils/return-utils";
import { SpecificationDTO } from "../dto/SpecificationDTO";
import { SpecificationModel } from "../models/SpecificationModel";
import { SpecificationRepositoryImpl } from "../repositories/data/SpecificationRepositoryImp";
import { SpecificationRepository } from "../repositories/domain/SpecificationRepository";

import { Request, Response } from "express";

class SpecificationController {

    constructor(private specificationRepository: SpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    private verifySpecificationAlreadyExistsByName (name: string): boolean {
        return this.specificationRepository.getAllSpecifications().some(specification => specification.name === name)
    }

    public createSpecification (request: Request, response: Response) {
        const specification: SpecificationDTO = {
            name: request.body.name,
            description: request.body.description,
        }
        if (this.verifySpecificationAlreadyExistsByName(specification.name)) {
            return sendReturn(response, 400, "Já existe uma especificação com esse nome")
        };
        this.specificationRepository.createSpecification(specification);
        return sendReturn(response, response.statusCode, response.statusMessage, specification)
    }

    public getAllSpecifications (request: Request, response: Response) {
        return sendReturn(response, response.statusCode, 'Data found', this.specificationRepository.getAllSpecifications())
    }

}

export default new SpecificationController(new SpecificationRepositoryImpl);