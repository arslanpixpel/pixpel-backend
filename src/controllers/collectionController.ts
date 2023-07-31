import express from "express";
import * as Collection from "../models/Collection";
import { successMessage, errorMessage } from "../Helper/Responses";

export const createCollection = async (req: express.Request, res: express.Response) => {
  try {
    const collection = await Collection.createCollection(req.body);
    res.status(201).send({ message: successMessage, data: `Created collection with _id: ${collection.id}` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readCollectionsByDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const collections = await Collection.readCollectionsByDeveloper(parseInt(req.params.developerId));
    res.status(200).send({ message: successMessage, data: collections });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deleteCollection = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Collection.deleteCollection(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: `Deleted ${deletedCount} collections.` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
