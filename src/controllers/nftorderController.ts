import express from "express";
import * as Order from "../models/NftOrder";
import { successMessage, errorMessage } from "../helper/Responses";

export const createOrder = async (req: express.Request, res: express.Response) => {
  try {
    const order = await Order.createOrder(req.body);
    res.status(201).send({ message: successMessage, data: `Created order with _id: ${order.id}` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readOrder = async (req: express.Request, res: express.Response) => {
  try {
    const order = await Order.readOrder(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: order });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const updateOrder = async (req: express.Request, res: express.Response) => {
  try {
    const order = await Order.updateOrder(parseInt(req.params.id), req.body);
    res.status(200).send({ message: successMessage, data: order });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deleteOrder = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Order.deleteOrder(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: `Deleted ${deletedCount} orders.` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
