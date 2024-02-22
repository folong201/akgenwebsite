import {  Router as ExpressRouter } from "express";
import { HelloFunction, hello2 } from "./../controllers/index.comtroller";
import { Authroutes } from "./auth.router";

const router = ExpressRouter();

router.use("/auth", Authroutes);
router.get("/hellofunction", HelloFunction);
router.get("/hello2", hello2);

export { router } 