# Unit Test: Testing Express API using Jest & Supertest

- Unit testing in Express.js is crucial for ensuring your APIs work as expected.

### Backend (Express Server) Setup

``` sh
mkdir server
cd server
npm init -y
npm i express nodemon jest supertest
```

- Write a basic server in index.js
- make a file named as index.test.js, put testing code

### Running Tests

Add this in your package.json:

```json
"scripts": {
  "test": "jest"
}
```

Use command ```npm test```