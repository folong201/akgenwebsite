import { login, register } from "./../controllers/auth.comtroller";
import { Router as ExpressRouter } from "express";
const Authroutes = ExpressRouter();
Authroutes.get("/login", login);
Authroutes.get("/register", register);
export { Authroutes }