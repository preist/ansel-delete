import dotenv from "dotenv";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";
import * as homeController from "./controllers/home";
import * as apiExampleController from "./controllers/api/example";

dotenv.config({ path: '.env' });

const app = express();

app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", homeController.index);

// Api
const api = express();

api.get("/example", apiExampleController.index);

// mount API
app.use('/api', api);

export default app;
