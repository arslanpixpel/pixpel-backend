import express from "express";
import * as Nft from "../models/Nft";
import {
  handleCreateResponse,
  handleReadResponse,
  handleUpdateResponse,
  handleDeleteResponse,
  handleGetAllResponse,
  successMessage,
  errorMessage,
  handleError,
} from "../helper/Responses";

export const createNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const nft = await Nft.createNft(req.body);
    handleCreateResponse(res, nft, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const readNft = async (req: express.Request, res: express.Response) => {
  try {
    const nftId = Number(req.params.id);
    const foundNft = await Nft.readNft(nftId);
    handleReadResponse(res, foundNft, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const updateNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedNft = await Nft.updateNft(req.params.id, req.body);
    handleUpdateResponse(res, updatedNft, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const deleteNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deletedCount = await Nft.deleteNft(req.params.id);
    handleDeleteResponse(res, deletedCount, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};

export const getAllNfts = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const allNfts = await Nft.getAllNfts();
    handleGetAllResponse(res, allNfts, successMessage, errorMessage);
  } catch (err) {
    handleError(err, res);
  }
};
