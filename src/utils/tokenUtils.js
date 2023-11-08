import jwt from 'jsonwebtoken';

function isTokenExpired(token) {
  try {
    const decodedToken = jwt.decode(token);

    if (!decodedToken || !decodedToken.exp) {
      // Token is invalid or doesn't have an expiration claim
      return true;
    }

    const expirationTimestamp = decodedToken.exp;
    const currentTimestamp = Math.floor(Date.now() / 1000);

    return expirationTimestamp < currentTimestamp;
  } catch (error) {
    // Error occurred while decoding the token
    console.error('Error decoding the token:', error);
    return true; // Indicate that there was an error but the token is not expired
  }
}

// Get the token from localStorage
function getToken() {
  return localStorage.getItem("token");
}

// Set the token to localStorage
function setToken(token) {
  localStorage.setItem("token", token);
}

// Check if the token is present and not expired
function isTokenValid() {
  const token = getToken();
  return token && !isTokenExpired(token);
}

export { isTokenExpired, getToken, setToken, isTokenValid };
