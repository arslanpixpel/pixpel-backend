import express from "express";
import * as TokenReleaseData from "../models/Tokenrelease";
import {
  handleCreateResponse,
  handleReadResponse,
  handleUpdateResponse,
  handleDeleteResponse,
  handleGetAllResponse,
  errorMessage,
  successMessage,
} from "../helper/Responses";

export const createTokenReleaseData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await TokenReleaseData.createTokenReleaseData(req.body);
    handleCreateResponse(res, data, "Inserted token release data", "Failed to insert token release data");
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
    handleReadResponse(res, foundData, "Found token release data", "Failed to find token release data");
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
    handleUpdateResponse(res, updatedData, "Updated token release data", "Failed to update token release data");
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
    handleDeleteResponse(res, deletedCount, "Deleted token release data", "Failed to delete token release data");
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      let errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const getAllTokenReleaseData = async (_req: express.Request, res: express.Response) => {
  try {
    const allData = await TokenReleaseData.getAllTokenReleaseData();
    handleGetAllResponse(res, allData, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
