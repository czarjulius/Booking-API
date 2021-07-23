export function appErrorHandler(err, req, res, next) {
  if (err.code && typeof err.code === 'number') {
    res.status(err.code).json({
      code: err.code,
      data: err.data || null,
      message: err.message
    });
  } else {
    next(err);
  }
}

export function genericErrorHandler(err, req, res) {
  console.error(`
    status - ${500} 
    message - ${err.stack} 
    url - ${req.originalUrl} 
    method - ${req.method} 
    IP - ${req.ip}
  `);

  res.status(500).json({
    code: 500,
    data: '',
    message: err.message
  });
}
