"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CategoryRoutes_1 = require("./modules/cars/routes/CategoryRoutes");
const SpecificationRoutes_1 = require("./modules/cars/routes/SpecificationRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/categories", CategoryRoutes_1.categoriesRoutes);
app.use("/specification", SpecificationRoutes_1.specificationRoutes);
app.listen(3333, () => console.log('listening on'));
