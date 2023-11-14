import express from "express";
import * as Gamedashboard from "../models/Gamedashboard";
import {
  successMessage,
  errorMessage,
  handleGetAllResponse,
  handleError,
} from "../helper/Responses";
import {
  handleReadResponse,
  handleUpdateResponse,
  handleDeleteResponse,
} from "../helper/Responses";

export const createGamedashboard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const gamedashboard = await Gamedashboard.createGamedashboard(req.body);
    res
      .status(201)
      .send({ message: "Created Dashboard successfully", data: gamedashboard });
  } catch (err) {
    handleError(err, res);
  }
};
