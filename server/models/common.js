const getUserByAgent = 'SELECT id, name, email FROM users WHERE agentId = $1';
const getAllAgents = 'SELECT * FROM agents';

export { getUserByAgent, getAllAgents };
