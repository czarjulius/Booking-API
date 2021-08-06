import * as ClientService from '../services';

class Client {
  static async booking(req, res, next) {
    try {
      const { rows } = await ClientService.createBooking(req.body);
      res.json({
        code: 200,
        message: 'Booking created successfully',
        data: rows[0]
      });
    } catch (error) {
      next(error);
    }
  }
  static async deleteBooking(req, res, next) {
    try {
      await ClientService.deleteBooking(req.params.id);
      res.json({
        code: 200,
        message: 'Booking deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  static async scheduler(req, res, next) {
    try {
      const data = await ClientService.getAllBookingsInWeek(req.query.week);
      res.json({
        code: 200,
        data,
        message: 'Bookings fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

export { Client };
