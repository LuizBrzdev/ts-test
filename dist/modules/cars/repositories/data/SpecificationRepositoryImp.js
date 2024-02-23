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
var _SpecificationRepositoryImpl_specifications;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationRepositoryImpl = void 0;
const SpecificationModel_1 = require("../../models/SpecificationModel");
class SpecificationRepositoryImpl {
    constructor() {
        _SpecificationRepositoryImpl_specifications.set(this, void 0);
        __classPrivateFieldSet(this, _SpecificationRepositoryImpl_specifications, [], "f");
    }
    getAllSpecifications() {
        return __classPrivateFieldGet(this, _SpecificationRepositoryImpl_specifications, "f");
    }
    createSpecification({ name, description }) {
        const specification = new SpecificationModel_1.SpecificationModel(name, description);
        Object.assign(specification, {
            name, description,
        });
        __classPrivateFieldGet(this, _SpecificationRepositoryImpl_specifications, "f").push(specification);
    }
}
exports.SpecificationRepositoryImpl = SpecificationRepositoryImpl;
_SpecificationRepositoryImpl_specifications = new WeakMap();
