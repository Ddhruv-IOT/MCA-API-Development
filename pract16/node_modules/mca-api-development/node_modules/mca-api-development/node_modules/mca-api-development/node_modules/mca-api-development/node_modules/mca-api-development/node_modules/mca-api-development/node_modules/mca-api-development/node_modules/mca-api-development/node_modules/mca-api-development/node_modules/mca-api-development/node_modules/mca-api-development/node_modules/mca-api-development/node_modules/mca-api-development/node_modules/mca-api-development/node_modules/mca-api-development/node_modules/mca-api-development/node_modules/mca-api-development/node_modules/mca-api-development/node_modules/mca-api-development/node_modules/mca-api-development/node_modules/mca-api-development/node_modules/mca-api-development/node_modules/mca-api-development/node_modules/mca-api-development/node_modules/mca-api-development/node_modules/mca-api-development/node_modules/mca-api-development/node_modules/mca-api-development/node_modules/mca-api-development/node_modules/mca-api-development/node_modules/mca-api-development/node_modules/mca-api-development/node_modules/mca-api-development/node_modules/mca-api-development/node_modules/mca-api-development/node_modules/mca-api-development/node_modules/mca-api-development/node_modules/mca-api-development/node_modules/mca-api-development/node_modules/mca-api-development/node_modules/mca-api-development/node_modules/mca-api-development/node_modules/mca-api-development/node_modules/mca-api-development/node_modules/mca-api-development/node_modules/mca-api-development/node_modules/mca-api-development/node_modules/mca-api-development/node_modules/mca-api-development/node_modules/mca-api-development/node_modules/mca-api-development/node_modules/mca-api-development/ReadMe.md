# Performing Role Based Authorization in Express

### Routes:
- POST: http://localhost:3000/register
- POST: http://localhost:3000/login
- GET: http://localhost:3000/protected
- GET: http://localhost:3000/admin

### npm install express jsonwebtoken bcrypt

### JSON
- Register
``` 
{ "username": "1", 
"password": "B",
"role": "user" (or admin)
} 
```

- Login
``` 
{"username": "1", 
"password": "B",
} 
```


## Flow
1. Register
2. Then Login with credentials
3. Copy the Token
4. Go to protected route, in AUTH (Bearer Token) add the toekn without double quotes
5. You should see Welcome Message!
6. Admin route will only work is user is created with role as Admin and its JWT is used in AUTH