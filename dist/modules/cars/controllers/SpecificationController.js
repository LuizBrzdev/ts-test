"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const return_utils_1 = require("../../../utils/return-utils");
const SpecificationRepositoryImp_1 = require("../repositories/data/SpecificationRepositoryImp");
class SpecificationController {
    constructor(specificationRepository) {
        this.specificationRepository = specificationRepository;
        this.specificationRepository = specificationRepository;
    }
    verifySpecificationAlreadyExistsByName(name) {
        return this.specificationRepository.getAllSpecifications().some(specification => specification.name === name);
    }
    createSpecification(request, response) {
        const specification = {
            name: request.body.name,
            description: request.body.description,
        };
        if (this.verifySpecificationAlreadyExistsByName(specification.name)) {
            return (0, return_utils_1.sendReturn)(response, 400, "Já existe uma especificação com esse nome");
        }
        ;
        this.specificationRepository.createSpecification(specification);
        return (0, return_utils_1.sendReturn)(response, response.statusCode, response.statusMessage, specification);
    }
    getAllSpecifications(request, response) {
        return (0, return_utils_1.sendReturn)(response, response.statusCode, 'Data found', this.specificationRepository.getAllSpecifications());
    }
}
exports.default = new SpecificationController(new SpecificationRepositoryImp_1.SpecificationRepositoryImpl);
