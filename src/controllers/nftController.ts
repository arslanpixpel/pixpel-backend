import express from "express";
import * as Nft from "../models/Nft";

export const createNft = async (req: express.Request, res: express.Response) => {
  try {
    const nft = await Nft.createNft(req.body);
    res.status(201).send(`Inserted NFT with _id: ${nft.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const readNft = async (req: express.Request, res: express.Response) => {
  try {
    const foundNft = await Nft.readNft(req.params.id);
    res.status(200).json(foundNft);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const updateNft = async (req: express.Request, res: express.Response) => {
  try {
    const updatedNft = await Nft.updateNft(req.params.id, req.body);
    res.status(200).send(`Updated NFT with _id: ${updatedNft.id}`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const deleteNft = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Nft.deleteNft(req.params.id);
    res.status(200).send(`Deleted ${deletedCount} NFTs.`);
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

