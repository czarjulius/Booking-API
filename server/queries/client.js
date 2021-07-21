const bookUser = (
  startAt,
  finishAt,
  userId,
  agentId
) => `INSERT INTO bookings(startAt, finishAt, userId, agentId)
                    VALUES(${startAt}, ${finishAt}, ${userId}, ${agentId})
                      RETURNING id, startAt, finishAt, userId, agentId`;

const checkAgentHasUser = (agentId, userId) =>
  `SELECT * from users_agents 
    WHERE agentId = ${agentId} AND userId = ${userId}`;

export { bookUser, checkAgentHasUser };
