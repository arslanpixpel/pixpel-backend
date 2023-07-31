import express from "express";
import * as Player from "../models/Player";

export const createPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.createPlayer(req.body);
    res.status(201).send(`Created player with _id: ${player.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const readPlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.readPlayer(parseInt(req.params.id));
    res.status(200).json(player);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const updatePlayer = async (req: express.Request, res: express.Response) => {
  try {
    const player = await Player.updatePlayer(parseInt(req.params.id), req.body);
    res.status(200).json(player);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const deletePlayer = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Player.deletePlayer(parseInt(req.params.id));
    res.status(200).send(`Deleted ${deletedCount} players.`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};
