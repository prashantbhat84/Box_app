'use strict';
import express from 'express';
import Router from './routes/routes.js';

const app = express();

app.use("/", Router);


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})