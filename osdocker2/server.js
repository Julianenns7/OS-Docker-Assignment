const express = require('express');
const bookRoutes = require('./routes')
const app = express();

app.use('/api/books', bookRoutes);

app.listen(8080, () => {
        console.log("app is running");
})