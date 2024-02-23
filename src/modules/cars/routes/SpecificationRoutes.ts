import { Router } from "express";
import SpecificationController from "../controllers/SpecificationController";


const specificationRoutes = Router();


specificationRoutes.post('/createSpecification', (request, response) =>
    SpecificationController.createSpecification(request, response)
);


specificationRoutes.get('/', (request, response) =>
    SpecificationController.getAllSpecifications(request, response)
);

export { specificationRoutes }



