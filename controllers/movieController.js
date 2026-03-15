
const axios = require('axios');  //Imports the 'axios' library so we can use it to make 'HTTP' requests to the 'OMDb API' in a simpler way than Node's built-in fetch.


const searchMovies = async (req, res) => { // Creates a function called 'searchMovies'. 
                                            // - 'req' = 
                                            // - 'res' = to send a response back. 
                                            // - using 'async' bc will do an API call that takes time to do.
const { title } = req.query; // Grabs the title value from the URL query string. So if someone hits /api/search?title=inception, this retreives 'inception'.


 if (!title) { //does a validation check, so that IF no title is found...
        return res.status(400).json({ error: 'Title query parameter is required' }); // THEN the code stops immediately and sends back a 400 error. 
                                                                                    // 'return' ensures the rest of the function doesn't keep running.
    }
 try { // this says "hey try the following, but if anything goes wrong, don't crash, jump to 'catch' block instead."
        const response = await axios.get('http://www.omdbapi.com/', { // 1) 'axios' makes a GET request to the OMDb API 2) waits for the response before moving on 3) The result gets stored in 'response'.
            params: {       // This info gets added to the URL automatically as query parameters
                s: title,   // 's' represents the search term, in this case the movie title
                apikey: process.env.OMDB_API_KEY //  represents my API key
            }
        });
        res.json(response.data); //sends the data OMDb provided to us back to whoever called the API, formatted as JSON.

} catch (error) { // If anything inside the try block fails like network issue, bad API key, etc. 
        res.status(500).json({ error: 'Failed to fetch movies' }); // THEN this catches it and sends back a 500 error instead of crashing the whole server.
}

}


const getMovieDetails = async (req, res) => { //Same structure as 'searchMovies' but with  a different function for fetching a single movie's details.

const { id } = req.params; // Grabs the ':id' to fetch the exact movie id from the URL route. 
                        // So if someone hits '/api/movies/tt0372784', this pulls out 'tt0372784'.

//if (!id) {
    //return res.status(400).json({ error: 'title id parameter is required' });
    //}







}


/*
#
- 'req' = 
req.query: query params, ex /search?title=inception  = req.query.title = "inception"
req.params:  route params, ex /movies/123 = req.params.id = "123"
req.body: data sent in the request body (ex, from a form or POST request)
req.headers: information about the request itself (browser type, auth tokens, etc.)
- So when someone visits /search?title=inception in the browser:
*
async function searchMovies(req, res) {
  const title = req.query.title; // grabs "inception" from the URL user inserts so that now you can use 'title' to search the OMDb API for the value 'inception'
}
#
 FOR....
            params: {       // This info gets added to the URL automatically as query parameters
                s: title,   // 's' represents the search term, in this case the movie title
                apikey: process.env.OMDB_API_KEY //  represents my API key 

...So the actual URL sent becomes http://www.omdbapi.com/?s=batman&apikey=yourkey.

#
req.query VS req.params;
##
- 'req.query' is like a search box, you're filtering a list
*
/api/search?title=batman
- You're saying "give me a LIST of movies that match batman" — could be many results
##
- 'req.params' is like an address, you know the exact location
*
/api/movies/tt0372784
- You're saying "give me THIS ONE specific movie" — only one possible result

- IOWs
req.query = "show me all movies with 'batman' in the title"  (returns a list)
req.params -  "give me the movie with ID tt0372784" (returns exactly one movie)

#
- While the following line works for the 2nd route...
//if (!id) {
    //return res.status(400).json({ error: 'title id parameter is required' });
    //}

...in practice it's almost impossible to trigger it, bc for example:
*
router.get('/movies/:id', getMovieDetails);
- If someone visits /api/movies/ with no ID, Express won't even match this route AND it'll just trigger a 404 automatically before your function ever runs.
- The only way to hit getMovieDetails is if something IS in the :id spot, so id will basically always have a value.

- Compare that to the search route:
*
router.get('/search', searchMovies);
- Here the URL never changes — the title comes from ?title=batman which is completely optional. 
- Someone can easily visit /api/search with no ?title= at all, so the validation check is necessary there in that case.
*/
















/*
Remember:
- the controller contains functions that handle what happens when a route is hit.

*/