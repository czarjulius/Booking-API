class Business {
  static async scheduler(req, res) {
    try {
      return res.status(200).json({
        status: 200,
        message: 'scheduler successfully'
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: err.message
      });
    }
  }
}

export { Business };
