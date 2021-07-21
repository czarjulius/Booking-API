const getAllUsers = (agentId) => `
SELECT us.id, us.name, us.email, us.created_at from users_agents ua
  INNER JOIN users us 
  ON us.id = ua.user_id  
  where ua.agent_id = ${agentId}
`;
const getAllAgents = `SELECT * from users where role = 'admin'`;

export { getAllUsers, getAllAgents };
