const HTTP_FORBIDDEN = 403;

export const isAdmin = (req, res, next) => {
  if (req.agentId === 'admin') {
    next();
  } else {
    next({
      code: HTTP_FORBIDDEN,
      status: 'error',
      message: 'Only admin agents are allowed'
    });
  }
};

export const adminAndRegular = (req, res, next) => {
  if (req.agentId === 'regular' || req.agentId === 'admin') {
    next();
  } else {
    next({
      code: HTTP_FORBIDDEN,
      status: 'error',
      message: 'Only agents are allowed'
    });
  }
};
