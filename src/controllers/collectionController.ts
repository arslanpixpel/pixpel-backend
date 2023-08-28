import express from "express";
import * as Collection from "../models/Collection";
import { successMessage, errorMessage, handleGetAllResponse } from "../helper/Responses";
import { handleCreateResponse, handleReadResponse, handleDeleteResponse } from "../helper/Responses";

export const createCollection = async (req: express.Request, res: express.Response) => {
  try {
    const collection = await Collection.createCollection(req.body);
    handleCreateResponse(res, collection, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readCollectionsByDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const collections = await Collection.readCollectionsByDeveloper(parseInt(req.params.developerId));
    handleReadResponse(res, collections, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deleteCollection = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Collection.deleteCollection(parseInt(req.params.id));
    handleDeleteResponse(res, deletedCount, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const getAllCollections = async (_req: express.Request, res: express.Response) => {
  try {
    const allCollections = await Collection.getAllCollections();
    handleGetAllResponse(res, allCollections, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
