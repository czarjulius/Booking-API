const getUserByAgent = 'SELECT id, name, email FROM users WHERE agent_id = $1';
const getAllAgents = 'SELECT * FROM agents';


export{
  getUserByAgent,
  getAllAgents
}