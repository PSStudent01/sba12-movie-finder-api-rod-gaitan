# 
Movie Finder API

- A simple REST API built with Node.js and Express that fetches movie data from the OMDb API.

## 
Setup
1. Clone the repo and install dependencies:
   npm install

2. Create a '.env' file and add your OMDb API key:
   OMDB_API_KEY=your_key_here

3. Start the server:
   node server.js

## 
Endpoints
Search for movies:
*
GET http://localhost:3001/api/search?title=batman

Get movie details by IMDb ID:
*
GET http://localhost:3001/api/movies/tt0372784

## 
Built With
- Node.js
- Express
- Axios
- dotenv
- OMDb API