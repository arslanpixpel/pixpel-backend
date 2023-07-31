import express from "express";
import * as Order from "../models/NftOrder";

export const createOrder = async (req: express.Request, res: express.Response) => {
  try {
    const order = await Order.createOrder(req.body);
    res.status(201).send(`Created order with _id: ${order.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const readOrder = async (req: express.Request, res: express.Response) => {
  try {
    const order = await Order.readOrder(parseInt(req.params.id));
    res.status(200).json(order);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const updateOrder = async (req: express.Request, res: express.Response) => {
  try {
    const order = await Order.updateOrder(parseInt(req.params.id), req.body);
    res.status(200).json(order);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const deleteOrder = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Order.deleteOrder(parseInt(req.params.id));
    res.status(200).send(`Deleted ${deletedCount} orders.`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};
