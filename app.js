const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();

const port = process.env.PORT || 5100;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
          version: "1.0.0",
          title: "Customer API",
          description: "Customer API Information",
          contact: {
              name: "Developer"
          },
          servers: ["http://localhost:5100"]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /customer:
 *   get:
 *     description: Use to request customer info
 *     responses:
 *       '200':
 *         description: A successful request
*/
app.get("/customer", (req, res)=>{
    res.send("Customer info");
})


/**
 * @swagger
 * /order:
 *   get:
 *     description: Use to request order info
 *     responses:
 *       '200':
 *         description: A successful request
*/
app.get("/order", (req, res)=>{
    res.send("Order info");
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});
