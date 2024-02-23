import { Router } from "express";
import { categoriesRoutes } from "./CategoryRoutes";
import { specificationRoutes } from "./SpecificationRoutes";

const carRoutes = Router();

carRoutes.use("/categories", categoriesRoutes)
carRoutes.use("/specification", specificationRoutes)

export { carRoutes };

