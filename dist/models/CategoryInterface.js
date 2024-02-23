"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const uuid_1 = require("uuid");
class Category {
    constructor(name, description, createdAt, id) {
        this.id = id || (0, uuid_1.v4)();
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
    }
}
exports.Category = Category;
