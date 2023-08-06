import express from "express";
import * as LaunchpadData from "../models/Launchpad";
import { successMessage, errorMessage } from "../helper/Responses";

export const createData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await LaunchpadData.createData(req.body);
    res.status(201).send({ message: successMessage, data: `Created data with _id: ${data.id}` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await LaunchpadData.readData(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: data });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const updateData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await LaunchpadData.updateData(parseInt(req.params.id), req.body);
    res.status(200).send({ message: successMessage, data: data });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deleteData = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await LaunchpadData.deleteData(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: `Deleted ${deletedCount} data.` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
