import runQuery from './../configs/db';
import { bookUser, checkAgentHasUser } from '../queries';
import { AppError } from './../configs';

export const createBooking = async ({ startAt, finishAt, userId, agentId }) => {
  const agentUser = await runQuery(checkAgentHasUser(agentId, userId));
  if (agentUser.rows.length === 0) {
    throw new AppError({
      code: 403,
      message: 'User is not assigned to agent'
    });
  }
  const query = bookUser(startAt, finishAt, userId, agentId);
  return runQuery(query);
};
