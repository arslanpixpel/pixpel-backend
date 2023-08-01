"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDeveloper = exports.updateDeveloper = exports.readDeveloper = exports.createDeveloper = void 0;
const Developer = __importStar(require("../models/Developer"));
const createDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const developer = yield Developer.createDeveloper(req.body);
        res.status(201).send(`Created developer with _id: ${developer.id}`);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.createDeveloper = createDeveloper;
const readDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const developer = yield Developer.readDeveloper(parseInt(req.params.id));
        res.status(200).json(developer);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.readDeveloper = readDeveloper;
const updateDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const developer = yield Developer.updateDeveloper(parseInt(req.params.id), req.body);
        res.status(200).json(developer);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.updateDeveloper = updateDeveloper;
const deleteDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCount = yield Developer.deleteDeveloper(parseInt(req.params.id));
        res.status(200).send(`Deleted ${deletedCount} developers.`);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.deleteDeveloper = deleteDeveloper;
