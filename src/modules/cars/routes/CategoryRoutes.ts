
import { Router } from 'express';
import { categoryController } from '../controllers/CategoryController';


const categoriesRoutes = Router();

categoriesRoutes.post('/createCategory', (request, response) => {
    return categoryController.createNewCategory(request, response)

});

categoriesRoutes.get('/', (request, response) => {
    return categoryController.getAllCategories(response)

});

export { categoriesRoutes };

