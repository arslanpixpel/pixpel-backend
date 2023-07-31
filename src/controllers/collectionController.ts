import express from "express";
import * as Collection from "../models/Collection";

export const createCollection = async (req: express.Request, res: express.Response) => {
  try {
    const collection = await Collection.createCollection(req.body);
    res.status(201).send(`Created collection with _id: ${collection.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const readCollectionsByDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const collections = await Collection.readCollectionsByDeveloper(parseInt(req.params.developerId));
    res.status(200).json(collections);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const deleteCollection = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Collection.deleteCollection(parseInt(req.params.id));
    res.status(200).send(`Deleted ${deletedCount} collections.`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};
