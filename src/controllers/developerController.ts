import express from "express";
import * as Developer from "../models/Developer";

export const createDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.createDeveloper(req.body);
    res.status(201).send(`Created developer with _id: ${developer.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const readDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.readDeveloper(parseInt(req.params.id));
    res.status(200).json(developer);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const updateDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.updateDeveloper(parseInt(req.params.id), req.body);
    res.status(200).json(developer);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const deleteDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Developer.deleteDeveloper(parseInt(req.params.id));
    res.status(200).send(`Deleted ${deletedCount} developers.`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};
