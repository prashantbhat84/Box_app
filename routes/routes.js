'use strict';
import express from 'express';
import Route from '../controller/routes.js';

const Router = express.Router();
const route = new Route();

/**
 * Test Route
 * @type {string}
 * @public
 * @returns Message with sucess and result with done
 */
Router.get("/", route.test);



export default Router;



