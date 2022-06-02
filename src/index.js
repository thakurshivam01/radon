const express = require('express');
const app = express();


const route = require('./routes/route.js');




app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

