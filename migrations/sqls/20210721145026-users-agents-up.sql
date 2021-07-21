/* Replace with your SQL commands */
CREATE TABLE users_agents (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  agentId INT NOT NULL,
  createdAt DATE DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(agentId) REFERENCES users(id)
)