"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("./app");
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.info("App is running at port:" + PORT);
});
