// server file
// Building the 'server.js'
// 1) Importing dependencies:
require('dotenv').config(); // This must be first. It reads the '.env' file and loads the API key into 'process.env' so the rest of the app can access it.
const express = require('express');  //Imports the 'express' library/framework and stores it in 'express' variable
//


// 2) Creating an 'Express' application instance:
const app = express(); // Creates an 'Express' application instance
                        // 'express()' is calling the 'express' callable function that came in imported in the 'express' library when 'required'
                        // this in turn creates the 'app' object/instance that you can apply to a variety of methods for things like:
                        // - defining routes
                        // - starting the server

// 3) Bridging the 'server.js' and the 'movieRoutes.js' file:                        
app.use('/api', movieRoutes); // This is the route mounting 
                              // it means every route in 'movieRoutes.js' will be prefixed with /api
                              // it mounts your routes onto a base path (ITC basepath is '/api')
                              // this says "hey, whenever a request comes in that starts with /api, send it to 'movieRoutes' to handle."

// 4) Creating/starting server:
const PORT = 7777;
app.listen(PORT, () => {  //starts the server on port 7777...
    console.log(`Server is running on http://localhost:${PORT}`); //and logs a message so you know it's running
});










/*
Scrapbook:
VIP example, if inside your 'movieRoutes' file you have:
*
router.get('/movies', ...)
router.get('/movies/:id', ...)

...with 'app.use('/api', movieRoutes)', the full URL for each become:
*
GET /api/movies
GET /api/movies/:id
*/





















/*
express = the framework that runs our server
axios = makes it easy to call the OMDb API
dotenv = lets us load secret values (like your API key) from a .env file
*/