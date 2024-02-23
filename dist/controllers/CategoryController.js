"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CategoryController_categories;
Object.defineProperty(exports, "__esModule", { value: true });
const return_utils_1 = require("../utils/return-utils");
class CategoryController {
    constructor() {
        _CategoryController_categories.set(this, []);
    }
    createNewCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = {
                name: request.body.name,
                description: request.body.description,
                createdAt: new Date(),
            };
            __classPrivateFieldGet(this, _CategoryController_categories, "f").push(category);
            return (0, return_utils_1.sendReturn)(response, response.statusCode, response.statusMessage, category);
        });
    }
    getAllCategories(response) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, return_utils_1.sendReturn)(response, response.statusCode, 'Data found', __classPrivateFieldGet(this, _CategoryController_categories, "f"));
        });
    }
}
_CategoryController_categories = new WeakMap();
exports.default = new CategoryController();
