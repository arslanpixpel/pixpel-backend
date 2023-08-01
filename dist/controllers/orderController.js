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
exports.deleteOrder = exports.updateOrder = exports.readOrder = exports.createOrder = void 0;
const Order = __importStar(require("../models/Order"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.createOrder(req.body);
        res.status(201).send(`Created order with _id: ${order.id}`);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.createOrder = createOrder;
const readOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.readOrder(parseInt(req.params.id));
        res.status(200).json(order);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.readOrder = readOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.updateOrder(parseInt(req.params.id), req.body);
        res.status(200).json(order);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCount = yield Order.deleteOrder(parseInt(req.params.id));
        res.status(200).send(`Deleted ${deletedCount} orders.`);
    }
    catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
});
exports.deleteOrder = deleteOrder;
