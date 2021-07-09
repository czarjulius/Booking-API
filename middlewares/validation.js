import db from "../models/db";
import { role } from '../models/role'

export const isAdmin = async (req, res, next) => {
  const X_Agent_Id = req.X_Agent_Id;
  const agent = await db.query(role, [X_Agent_Id]);
  const agentRole = agent?.rows[0]?.name
  if (agentRole !== "Admin") {
    res.status(403).json({
      status: 403,
      error: 'You are not authorized to perform this operation',
    }); 
  }
  next();
};

export const isAgent = async (req, res, next) => {
  const X_Agent_Id = req.X_Agent_Id;
  const agent = await db.query(role, [X_Agent_Id]);
  const agentRole = agent?.rows[0]?.name
  if (agentRole !== "Regular" || agentRole !== "Admin") {
    res.status(404).json({
      status: 404,
      error: 'You are not an agent',
    }); 
  }
  next();
};

export const agentExist = async (req, res, next) => {
  const X_Agent_Id = req.X_Agent_Id;
  const agent = await db.query(role, [X_Agent_Id]);
  if (!agent || agent == null || agent == undefined) {
    res.status(403).json({
      status: 403,
      error: 'Agent not found',
    }); 
  }
  next();
};

