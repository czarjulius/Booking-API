const authenticate = async (req, res, next) => {
  const agentId = req.header('x-agent-id');
  if (!agentId) {
    return res.status(401).json({
      status: 401,
      error: 'access denied, no access header provided'
    });
  }
  try {
    req.agentId = agentId;
    next();
  } catch (error) {
    res.status(401).json({
      status: 401,
      error: 'authentication failed, please login again'
    });
  }
};

export default authenticate;
