const getAllUsers = (agentId) => `
SELECT us.id, us.name, us.email, us.createdat from users_agents ua
  INNER JOIN users us 
  ON us.id = ua.userid  
  where ua.agentid = ${agentId}
`;
const getAllAgents = `SELECT * from users where role = 'admin'`;

export { getAllUsers, getAllAgents };
