import express from 'express';
import * as Cart from '../models/Cart';
import { successMessage, errorMessage } from "../Helper/Responses";

export const addToCart = async (req: express.Request, res: express.Response) => {
    try {
        const cart = await Cart.addToCart(req.body);
        res.status(201).send({ message: successMessage, data: `Added NFT with _id: ${cart.nft_id} to cart` });
    } catch (err) {
        res.status(500).send({ error: errorMessage });
    }
};

export const readCart = async (req: express.Request, res: express.Response) => {
    try {
        const cartItems = await Cart.readCart(parseInt(req.params.cartId));
        res.status(200).send({ message: successMessage, data: cartItems });
    } catch (err) {
        res.status(500).send({ error: errorMessage });
    }
};

export const removeFromCart = async (req: express.Request, res: express.Response) => {
    try {
        const deletedCount = await Cart.removeFromCart(
            parseInt(req.params.cartId)
        );
        res.status(200).send({ message: successMessage, data: `Removed ${deletedCount} items from cart.` });
    } catch (err) {
        res.status(500).send({ error: errorMessage });
    }
};

export const moveToOrders = async (req: express.Request, res: express.Response) => {
    try {
        await Cart.moveToOrders(parseInt(req.params.cartId));
        res.status(200).send({ message: successMessage, data: `Moved items from cart with ID: ${req.params.cartId} to orders` });
    } catch (err) {
        res.status(500).send({ error: errorMessage });
    }
};