import express from "express";
import * as Player from "../models/Player";
import { successMessage, errorMessage } from "../Helper/Responses";

export const createPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.createPlayer(req.body);
    res.status(201).send({ message: successMessage, data: `Created player with _id: ${player.id}` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const readPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.readPlayer(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: player });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const updatePlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.updatePlayer(parseInt(req.params.id), req.body);
    res.status(200).send({ message: successMessage, data: player });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deletePlayer = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Player.deletePlayer(parseInt(req.params.id));
    res.status(200).send({ message: successMessage, data: `Deleted ${deletedCount} players.` });
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
