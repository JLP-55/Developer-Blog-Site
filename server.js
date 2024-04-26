const express = require("express"); /*Express will be used to do all out routing, ie; get post etc.*/
const sequelize = require("./config/connection");

const path = require("path"); /*The path parameter enables us to reach api endpoints.*/

const routes = require("./controllers"); /*use this variable to access all routes*/

const app = express(); /*app = an instance of express*/ 
const PORT = process.env.PORT || 3001; /*listen at PORT*/ 

app.use(routes);

// middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(routes);

// serves up all static files, html, css, etc.
app.use(express.static(path.join(__dirname, "public")));

// static assets for login
// app.get("/login", (req, resp) => {
// 	resp.sendFile(path.join(__dirname, "./public/html/login.html"));
// 	console.log("viewing login page");
// });

sequelize.sync({force: false}).then(() => {
	app.listen(PORT, () => {
		console.log(`app is listening at http://localhost/${PORT}`);
	});
});