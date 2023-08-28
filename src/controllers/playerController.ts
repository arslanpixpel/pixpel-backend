import express from "express";
import * as Player from "../models/Player";
import { successMessage, errorMessage, handleGetAllResponse } from "../helper/Responses";
import { handleCreateResponse, handleReadResponse, handleUpdateResponse, handleDeleteResponse } from "../helper/Responses";

export const createPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.createPlayer(req.body);
    handleCreateResponse(res, player, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.readPlayer(parseInt(req.params.id));
    handleReadResponse(res, player, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const updatePlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.updatePlayer(parseInt(req.params.id), req.body);
    handleUpdateResponse(res, player, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deletePlayer = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Player.deletePlayer(parseInt(req.params.id));
    handleDeleteResponse(res, deletedCount, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const getAllPlayers = async (_req: express.Request, res: express.Response) => {
  try {
    const allPlayers = await Player.getAllPlayers();
    handleGetAllResponse(res, allPlayers, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const signupPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.signupPlayer(req.body);
    res.status(201).send({ message: "Player signed up successfully", data: player });
  } catch (err) {
    res.status(500).send({ error: "Failed to sign up player" });
  }
};

export const signinPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    const player = await Player.signinPlayer(email, password);
    if (player) {
      res.status(200).send({ message: "Player signed in successfully", data: player });
    } else {
      res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).send({ error: "Failed to sign in player" });
  }
};
