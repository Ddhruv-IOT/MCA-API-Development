
# Setting UP GitHub OAuth 2.0 for Express App

### Create a GitHub OAuth App
1. Go to GitHub Developer Settings.
2. Click "New OAuth App".
3. Fill in the details:
   - Application name: Your app name
   - Homepage URL: http://localhost:3000
   - Authorization callback URL: http://localhost:3000/auth/github/callback
4. Click Register application.
5. Copy Client ID and Client Secret.

### Install Dependencies
- Run the following command to install the necessary packages:
```sh
npm init -y
npm install express dotenv passport passport-github2 express-session
```

### Set Up Express Server
- Create an index.js file and set up the Express server.

### Configure Environment Variables
- Create a .env file and add your GitHub credentials:
```.env 
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```
### Run the Application
- Start the server: ```node index.js```
- Visit http://localhost:3000 and click "Login with GitHub".

### Testing
- After logging in, GitHub will redirect you to /profile, displaying user details.
- Logout via /logout.

## This sets up OAuth 2.0 authentication in Express using GitHub! 🚀
[Refrence](https://chatgpt.com/share/67ec4be0-f458-8013-aa66-7f1daac6ae45)