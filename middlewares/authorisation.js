const authenticate = async (req, res, next) => {  
  const X_Agent_Id = req.header('X-Agent-Id');
  if (!X_Agent_Id) {
    return res.status(401).json({
      status: 401,
      error: 'access denied, no access header provided',
    });
  }
  try {
    req.X_Agent_Id = X_Agent_Id;    
    next();
  } catch (error) {
    res.status(401).json({
      status: 401,
      error: 'something went wrong, it is not you, it is us!',
    }); 
  }
};

export default authenticate;