import express from "express";
import * as TokenReleaseData from "../models/Tokenrelease";

export const createTokenReleaseData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await TokenReleaseData.createTokenReleaseData(req.body);
    res.status(201).send(`Inserted token release data with _id: ${data.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const readTokenReleaseData = async (req: express.Request, res: express.Response) => {
  try {
    const foundData = await TokenReleaseData.readTokenReleaseData(parseInt(req.params.id));
    res.status(200).json(foundData);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const updateTokenReleaseData = async (req: express.Request, res: express.Response) => {
  try {
    const updatedData = await TokenReleaseData.updateTokenReleaseData(parseInt(req.params.id), req.body);
    res.status(200).send(`Updated token release data with _id: ${updatedData.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const deleteTokenReleaseData = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await TokenReleaseData.deleteTokenReleaseData(parseInt(req.params.id));
    res.status(200).send(`Deleted ${deletedCount} token release data.`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};