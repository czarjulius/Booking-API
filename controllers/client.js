import db from "../models/db";
import { bookUser, deleteBooking } from '../models/client'

class Client{

  static async booking(req, res){
    try {
      const { start_at, finish_at, user_id } = req.body;
      const booked_by = req.X_Agent_Id;


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
  static async deleteBooking(req, res){
    try {
      const { id } = req.params;
    
        await db.query(deleteBooking, [id]);

        return res.status(200).json({
          status: 200,
          message: "Deleted successfully",
        });

    }catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    });
  }
  }
}

export default Client