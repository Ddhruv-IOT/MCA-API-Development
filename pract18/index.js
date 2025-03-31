const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json());

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Express API",
      version: "1.0.0",
      description: "A simple API with Swagger",
    },
  },
  apis: ["./index.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, world!"
 */
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

/**
 * @swagger
 * /echo:
 *   post:
 *     summary: Echoes the received data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 example: "Hello Swagger"
 *     responses:
 *       200:
 *         description: Echoes back the received data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 */
app.post("/echo", (req, res) => {
  res.json({ data: req.body.data });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
