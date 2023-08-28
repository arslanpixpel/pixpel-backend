import express from "express";
import * as LaunchpadData from "../models/Launchpad";
import { successMessage, errorMessage, handleGetAllResponse, handleError } from "../helper/Responses";
import {
  handleCreateResponse,
  handleReadResponse,
  handleUpdateResponse,
  handleDeleteResponse,
} from "../helper/Responses";

export const createData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await LaunchpadData.createData(req.body);
    handleCreateResponse(res, data, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const readData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await LaunchpadData.readData(parseInt(req.params.id));
    handleReadResponse(res, data, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const updateData = async (req: express.Request, res: express.Response) => {
  try {
    const data = await LaunchpadData.updateData(parseInt(req.params.id), req.body);
    handleUpdateResponse(res, data, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const deleteData = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await LaunchpadData.deleteData(parseInt(req.params.id));
    handleDeleteResponse(res, deletedCount, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const getAllLaunchpadData = async (_req: express.Request, res: express.Response) => {
  try {
    const allLaunchpadData = await LaunchpadData.getAllLaunchpadData();
    handleGetAllResponse(res, allLaunchpadData, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};
