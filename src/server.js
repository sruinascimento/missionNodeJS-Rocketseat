"use strict";
//toda vez que vermos ... pontos '...express'
//yarn add @types/express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.listen(3000, function () {
    console.log("Server is run at port " + 3000);
});
