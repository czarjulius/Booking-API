import { runQuery } from './../configs/';
import * as Client from '../queries';
import { AppError } from './../configs';

export const createBooking = async ({ startAt, finishAt, userId, agentId }) => {
  const agentUser = await runQuery(Client.checkAgentHasUser(agentId, userId));
  if (agentUser.rows.length === 0) {
    throw new AppError({
      code: 403,
      message: 'User is not assigned to agent'
    });
  }
  const query = Client.bookUser(startAt, finishAt, userId, agentId);
  return runQuery(query);
};

export const deleteBooking = async (bookId) => {
  const booking = await runQuery(Client.checkBookingExist(bookId));
  if (booking.rows.length === 0) {
    throw new AppError({
      code: 404,
      message: 'Booking not found'
    });
  }
  const query = Client.deleteBooking(bookId);
  return runQuery(query);
};

export const getAllBookingsInWeek = async (week) => {
  const query = Client.getAllBookingsInWeek(week);
  return runQuery(query);
};
