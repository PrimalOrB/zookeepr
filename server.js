const express = require( 'express' ); 
const fs = require( 'fs' )
const path = require( 'path' )
const { animals } = require( './data/animals' );
const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use( express.urlencoded( { extended: true} ) );
// parse incoming JSON data
app.use( express.json() )
// open public route
app.use( express.static( 'public' ) )
// api routes
const apiRoutes = require('./routes/apiRoutes');
// html routes
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen( PORT, () => {
    console.log( `API server now on port ${PORT}!` );
});