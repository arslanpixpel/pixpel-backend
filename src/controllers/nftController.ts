import express from "express";
import * as Nft from "../models/Nft";
import { handleCreateResponse, handleReadResponse, handleUpdateResponse, handleDeleteResponse, handleGetAllResponse, successMessage, errorMessage } from "../helper/Responses";

export const createNft = async (req: express.Request, res: express.Response) => {
  try {
    const nft = await Nft.createNft(req.body);
    handleCreateResponse(res, nft, "Inserted NFT", "Failed to insert NFT");
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
    handleReadResponse(res, foundNft, "Found NFT", "Failed to find NFT");
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
    handleUpdateResponse(res, updatedNft, "Updated NFT", "Failed to update NFT");
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
    handleDeleteResponse(res, deletedCount, "Deleted NFTs", "Failed to delete NFTs");
  } catch (err) {
    let errorMessage = "Failed to do something";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    res.status(500).send(errorMessage);
  }
};

export const getAllNfts = async (_req: express.Request, res: express.Response) => {
  try {
    const allNfts = await Nft.getAllNfts();
    handleGetAllResponse(res, allNfts, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};
