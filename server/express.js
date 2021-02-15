import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import Template from "./../template";
import devBundle from "./devBundle";
import path from 'path'
const CURRENT_WORKING_DIR  = process.cwd()
const app = express();
devBundle.compile(app)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/dist',express.static(path.join(CURRENT_WORKING_DIR,'dist')))
app.use("/api/registered_user/",userRoutes)
app.use("/auth/",authRoutes)
app.get("/", (req, res) => {
  res.status(200).send(Template());
});
export default app;