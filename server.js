const express = require("express"); /*Express will be used to do all out routing, ie; get post etc.*/

const path = require("path"); /*The path parameter enables us to reach api endpoints.*/

const routes = require("./controllers"); /*use this variable to access all routes*/

// this will automatically run nodemailer function to send an email
// you will have to route it correctly
// const nodeMailer = require("./nodemailer/mail-app.js");

// const session = require("express-session"); /*Express-session = middleware*/

// const expressHandlebars = require("express-handlebars"); /*Template engine*/

	
// const db = require("./config/connection"); /*connect to the database*/

const app = express(); /*app = an instance of express*/ 
const PORT = process.env.PORT || 3001; /*listen at PORT*/ 

// app.use(routes);

// middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(routes);

// serves up all static files, html, css, etc.
app.use(express.static(path.join(__dirname, "public")));

// static assets for home
// app.get("/", (req, resp) => {
// 	resp.sendFile(path.join(__dirname, "./public/html/index.html"));
// console.log("viewing home page");
// });

// static assets for login
app.get("/login", (req, resp) => {
	resp.sendFile(path.join(__dirname, "./public/html/login.html"));
	console.log("viewing login page");
});

app.listen(PORT, () => {
	console.log(`app is listening at http://localhost/${PORT}`);
});