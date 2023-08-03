import express from "express";
import * as Developer from "../models/Developer";
import { successMessage, errorMessage } from "../helper/Responses";

export const createDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.createDeveloper(req.body);
    res.status(201).send({ message: successMessage, data: `Created developer with _id: ${developer.id}` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.readDeveloper(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: developer });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const updateDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.updateDeveloper(parseInt(req.params.id), req.body);
    res.status(200).send({ message: successMessage, data: developer });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deleteDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Developer.deleteDeveloper(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: `Deleted ${deletedCount} developers.` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
