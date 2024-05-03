const express = require("express"); /*Express will be used to do all out routing, ie; get post etc.*/
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const path = require("path"); /*The path parameter enables us to reach api endpoints.*/

const routes = require("./controllers"); /*use this variable to access all routes*/

const app = express(); /*app = an instance of express*/ 
const PORT = process.env.PORT || 3001; /*listen at PORT*/ 

// middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(routes);

// serves up all static files, html, css, etc.
app.use(express.static(path.join(__dirname, "public")));

// comment the sequelize.sync out to not get an error and connect to the database
// clearly having trouble syncing the models to the database
sequelize.sync({force: false}).then(() => {
	app.listen(PORT, () => {
		console.log(`app is listening at http://localhost/${PORT}`);
	});
});