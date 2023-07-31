import express from 'express';
import * as Cart from '../models/Cart';

export const addToCart = async (req: express.Request, res: express.Response) => {
    try {
        const cart = await Cart.addToCart(req.body);
        res.status(201).send(`Added NFT with _id: ${cart.nft_id} to cart`);
    } catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
};

export const readCart = async (req: express.Request, res: express.Response) => {
    try {
        const cartItems = await Cart.readCart(parseInt(req.params.cartId));
        res.status(200).json(cartItems);
    } catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
};

export const removeFromCart = async (req: express.Request, res: express.Response) => {
    try {
        const deletedCount = await Cart.removeFromCart(
            parseInt(req.params.cartId)
        );
        res.status(200).send(`Removed ${deletedCount} items from cart.`);
    } catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
};

export const moveToOrders = async (req: express.Request, res: express.Response) => {
    try {
        await Cart.moveToOrders(parseInt(req.params.cartId));
        res.status(200).send(`Moved items from cart with ID: ${req.params.cartId} to orders`);
    } catch (err) {
        let errorMessage = "Failed to do something";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(500).send(errorMessage);
    }
};