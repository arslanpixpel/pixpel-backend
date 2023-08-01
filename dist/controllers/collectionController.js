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
exports.deleteCollection = exports.readCollectionsByDeveloper = exports.createCollection = void 0;
const Collection = __importStar(require("../models/Collection"));
const createCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = yield Collection.createCollection(req.body);
        res.status(201).send(`Created collection with _id: ${collection.id}`);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.createCollection = createCollection;
const readCollectionsByDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collections = yield Collection.readCollectionsByDeveloper(parseInt(req.params.developerId));
        res.status(200).json(collections);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.readCollectionsByDeveloper = readCollectionsByDeveloper;
const deleteCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCount = yield Collection.deleteCollection(parseInt(req.params.id));
        res.status(200).send(`Deleted ${deletedCount} collections.`);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.deleteCollection = deleteCollection;
