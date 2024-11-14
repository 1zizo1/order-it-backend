import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck= auth({
    audience: 'mern-food-ordering-app-api',
    issuerBaseURL: 'https://dev-imrpgkdp1xk5q4ge.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });