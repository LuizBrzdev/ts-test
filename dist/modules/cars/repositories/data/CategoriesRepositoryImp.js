"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CategoriesRepositoryImp_categories;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepositoryImp = void 0;
const CategoryModel_1 = require("../../models/CategoryModel");
class CategoriesRepositoryImp {
    constructor() {
        _CategoriesRepositoryImp_categories.set(this, void 0);
        __classPrivateFieldSet(this, _CategoriesRepositoryImp_categories, [], "f");
    }
    static getInstance() {
        if (!CategoriesRepositoryImp.instance) {
            CategoriesRepositoryImp.instance = new CategoriesRepositoryImp();
        }
        return CategoriesRepositoryImp.instance;
    }
    createCategory({ name, description }) {
        const category = new CategoryModel_1.CategoryModel(name, description);
        Object.assign(category, {
            name,
            description,
        });
        __classPrivateFieldGet(this, _CategoriesRepositoryImp_categories, "f").push(category);
    }
    getAllCategories() {
        return __classPrivateFieldGet(this, _CategoriesRepositoryImp_categories, "f");
    }
    alreadyExist(name) {
        return __classPrivateFieldGet(this, _CategoriesRepositoryImp_categories, "f").some(category => category.name === name);
    }
}
exports.CategoriesRepositoryImp = CategoriesRepositoryImp;
_CategoriesRepositoryImp_categories = new WeakMap();
