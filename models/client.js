const bookUser = `INSERT INTO bookings(start_at, finish_at, user_id, booked_by)
                    VALUES($1, $2, $3, $4)
                      RETURNING id, start_at, finish_at, user_id, booked_by`;

export{
  bookUser
}