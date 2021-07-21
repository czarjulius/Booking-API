import db from '../models/db';
import { getUserByAgent, getAllAgents } from '../models/common';

class Common {
  static async getUserByAgent(req, res) {
    try {
      const agentId = req.agentId;

      const users = await db.query(getUserByAgent, [agentId]);

      return res.status(200).json({
        status: 200,
        message: 'Fetched successfully',
        data: users.rows
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: err.message
      });
    }
  }
  static async getAllAgents(req, res) {
    try {
      const agents = await db.query(getAllAgents);

      return res.status(200).json({
        status: 200,
        message: 'Fetched successfully',
        data: agents.rows
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: err.message
      });
    }
  }
}

export default Common;
