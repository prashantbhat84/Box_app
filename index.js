'use strict';
import express from 'express';
import Router from './routes/routes.js';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './utils/swagger.js'
const app = express();
app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerDoc)
);

app.use("/", Router);


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})
