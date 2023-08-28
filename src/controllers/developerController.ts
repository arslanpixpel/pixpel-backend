import express from "express";
import * as Developer from "../models/Developer";
import { successMessage, errorMessage, error, handleGetAllResponse } from "../helper/Responses";
import { handleCreateResponse, handleReadResponse, handleUpdateResponse, handleDeleteResponse } from "../helper/Responses";

// export const createDeveloper = async (req: express.Request, res: express.Response) => {
//   try {
//     const developer = await Developer.createDeveloper(req.body);
//     handleCreateResponse(res, developer, successMessage, errorMessage);
//   } catch (err) {
//     res.status(500).send({ error: errorMessage });
//   }
// };

export const readDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.readDeveloper(parseInt(req.params.id));
    handleReadResponse(res, developer, successMessage, error);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const updateDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.updateDeveloper(parseInt(req.params.id), req.body);
    handleUpdateResponse(res, developer, successMessage, error);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const deleteDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const deletedCount = await Developer.deleteDeveloper(parseInt(req.params.id));
    handleDeleteResponse(res, deletedCount, successMessage, error);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const getAllDevelopers = async (_req: express.Request, res: express.Response) => {
  try {
    const allDevelopers = await Developer.getAllDevelopers();
    handleGetAllResponse(res, allDevelopers, successMessage, errorMessage);
  } catch (err) {
    res.status(500).send({ error: errorMessage });
  }
};

export const signupDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const developer = await Developer.signupDeveloper(req.body);
    res.status(201).send({ message: "Developer signed up successfully", data: developer });
  } catch (err) {
    res.status(500).send({ error: "Failed to sign up developer" });
  }
};

export const signinDeveloper = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    const developer = await Developer.signinDeveloper(email, password);
    if (developer) {
      res.status(200).send({ message: "Developer signed in successfully", data: developer });
    } else {
      res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).send({ error: "Failed to sign in developer" });
  }
};


