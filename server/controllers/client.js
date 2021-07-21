import db from '../models/db';
import { createBooking } from '../services';

class Client {
  static async booking(req, res, next) {
    try {
      const { rows } = await createBooking(req.body);
      res.json({
        code: 200,
        message: 'Booking created successfully',
        data: rows[0]
      });
    } catch (error) {
      next(error);
    }
  }
  static async deleteBooking(req, res) {
    try {
      const { id } = req.params;

      await db.query(deleteBooking, [id]);

      return res.status(200).json({
        status: 200,
        message: 'Deleted successfully'
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: err.message
      });
    }
  }

  static async scheduler(req, res) {
    const { week } = req.query;
    try {
      const AllScheduler = await db.query(getAllScheduler, [week]);

      return res.status(200).json({
        status: 200,
        data: [...AllScheduler.rows]
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: err.message
      });
    }
  }
}

export default Client;
