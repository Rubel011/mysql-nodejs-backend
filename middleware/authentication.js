const jwt = require('jsonwebtoken');
const { errorResponse } = require('../helpers/successAndError');
const secret_key = process.env.SECRET_KEY || 'your-secret-key'

function authenticate(req, res, next) {
  // Get the token from the request headers
  const token = req.header('Authorization');

  // Check if the token is missing
  if (!token) {
    return res.status(401).json(errorResponse(401, 'Unauthorized - Token missing'));
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, secret_key);

    // Attach the user information to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Token is invalid or expired
    return res.status(401).json(errorResponse(401, error.message));
  }
}

module.exports = authenticate;
