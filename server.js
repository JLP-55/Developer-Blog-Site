// express is for the routing
const express = require("express"); 
// sequelize is for the models/queries
const sequelize = require("./config/connection");
// session is for authentication
const session = require("express-session");
// exphbs/hbs is for the view engine
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// ??? authentication
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const path = require("path"); /*The path parameter enables us to reach api endpoints.*/

const routes = require("./controllers"); /*use this variable to access all routes*/

const app = express(); /*app = an instance of express*/ 
const PORT = process.env.PORT || 3001; /*listen at PORT*/ 

// middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(routes);
// set the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// serves up all static files: css, js from the "public folder"
// we don't need it for the "view" ie, the .handlebars files inside the views folder in this instance
app.use(express.static(path.join(__dirname, "public")));

// comment the sequelize.sync out to not get an error and connect to the database
// clearly having trouble syncing the models to the database
sequelize.sync({force: false}).then(() => {
	app.listen(PORT, () => {
		console.log(`app is listening at http://localhost/${PORT}`);
	});
});