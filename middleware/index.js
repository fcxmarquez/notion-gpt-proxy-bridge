export const authenticateRequest = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('Authorization header is required');
  }
  
  next(); 
};
