import runQuery from './../configs/db';
import * as Common from '../queries';

export const getAllAgentUsers = async (agentId) => {
  return runQuery(Common.getAllUsers(agentId));
};

export const getAllAgents = async () => {
  return runQuery(Common.getAllAgents);
};
