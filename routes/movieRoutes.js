// routes file
// Building the 'movieRoutes.js'
// 1) Importing dependencies:
const express = require('express');  //Imports the 'express' library/framework and stores it in 'express' variable. This provides '(Router)' tool
const router = express.Router(); // using '(Router)' tool to create a new router instance/object ('router').  
const { searchMovies, getMovieDetails } = require('../controllers/movieController'); // Imports something from the 'movieController' file
                                                                                    // ...that something is 2 specific functions from the rest of 'movieController.js' that dont exist yet (like PROMISES I guess)
                                                                                    // '{ }' = "holds the two PROMISED things from that file. IOWs destructuring, allows to grab specific 'exports' by name
                                                                                    //  '../' = go up one folder level to find it.

router.get('/search', searchMovies); // This says "hey, IF user visits broswser with a '/search' GET request, THEN run the the 'searchMovies' function"
router.get('/movies/:id', getMovieDetails); // This says "hey, IF  user visits broswser with a '/movies/:id' (:id = any movie id) GET request, THEN run the the 'getMovieDetails' function"

module.exports = router; // this makes '' router available to other files. Without this, 'server.js' can't import it.




/*
SIDE NOTES:
#
"The GET request is any GET request to that endpoint so it could be:
- from a browser 
- Postman 
- another server
#
remember ':id' is a dynamic parameter.
*/