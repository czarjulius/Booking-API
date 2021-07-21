const authenticate = async (req, res, next) => {
  const agentId = req.header('x-agent-id');
  if (!agentId) {
    next({
      code: 401,
      message: 'access denied, no access header provided'
    });
  }
  try {
    req.agentId = agentId;
    next();
  } catch (error) {
    next({
      code: 401,
      message: 'authentication failed, please login again'
    });
  }
};

export default authenticate;
