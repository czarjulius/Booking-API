/* Replace with your SQL commands */
CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  startAt VARCHAR(255),
  finishAt VARCHAR(255),
  userId INT NOT NULL,
  agentId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (agentId) REFERENCES users(id),
  createdAt DATE DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATE DEFAULT CURRENT_TIMESTAMP
)