const express = require("express"); /*Express will be used to do all out routing, ie; get post etc.*/

const path = require("path"); /*The path parameter enables us to reach api endpoints.*/

// const session = require("express-session"); /*Express-session = middleware*/

// const expressHandlebars = require("express-handlebars"); /*Template engine*/

// const api = require("./controllers"); /*use this variable to access all routes*/
	
// const db = require("./config/connection"); /*connect to the database*/

const app = express(); /*app = an instance of express*/ 
const PORT = process.env.PORT || 3001; /*listen at PORT*/ 

// middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));
// serves up all static files, html, css, etc.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
	console.log(`app is listening at http://localhost/${PORT}`);
});