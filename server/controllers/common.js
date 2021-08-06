import * as CommonService from '../services';

class Common {
  static async getUserByAgent(req, res, next) {
    try {
      const data = await CommonService.getAllAgentUsers(req.params.agentid);
      res.json({
        code: 200,
        data: data.rows[0],
        message: 'Agent users fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }
  static async getAllAgents(req, res, next) {
    try {
      const data = await CommonService.getAllAgents();
      res.json({
        code: 200,
        data,
        message: 'All agents fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

export { Common };
