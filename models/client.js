const bookUser = `INSERT INTO bookings(start_at, finish_at, user_id, booked_by)
                    VALUES($1, $2, $3, $4)
                      RETURNING id, start_at, finish_at, user_id, booked_by`;

const getAllScheduler = `SELECT U.name, U.email, B.start_at, B.finish_at FROM users AS U LEFT JOIN bookings AS B 
                          ON U.id=B.user_id where B.start_at = $1`;

const deleteBooking = `DELETE FROM bookings WHERE id = $1`;

export{
  bookUser,
  deleteBooking,
  getAllScheduler
}