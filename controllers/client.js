import db from "../models/db";
import { bookUser } from '../models/client'

class Client{

  static async booking(req, res){
    try {
      const { start_at, finish_at } = req.body;
      const user_id = 1
      const booked_by = 1

      const addBooking = await db.query(bookUser, [start_at, finish_at, user_id, booked_by]);

      return res.status(200).json({
        status: 200,
        message: "Clubs successful",
        data: [...addBooking.rows]
      });

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    });
  }
  }
}

export default Client