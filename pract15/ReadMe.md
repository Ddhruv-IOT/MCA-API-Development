# Performing Login & Auth using JWT

### Routes:
- POST: http://localhost:3000/register
- POST: http://localhost:3000/login
- GET: http://localhost:3000/protected

## Flow
1. Register
2. Then Login with credentials
3. Copy the Token
4. Go to protected route, in AUTH add the toekn without double quotes
5. You should see Welcome Message!