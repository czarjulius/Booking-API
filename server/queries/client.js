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

const checkBookingExist = (bookId) =>
  `SELECT * from bookings  WHERE id = ${bookId}`;

const deleteBooking = (bookId) => `DELETE from bookings WHERE id = ${bookId}`;

const getAllBookingsInWeek = (week) =>
  `SELECT us.id, us.name, us.email, us.createdAt, 
    DATEPART(week, bk.startAt) as week from bookings bk
      INNER JOIN users us ON us.id = bk.userId
        where DATEPART(week, bk.startAt) = ${week}`;

export {
  bookUser,
  checkAgentHasUser,
  deleteBooking,
  checkBookingExist,
  getAllBookingsInWeek
};
