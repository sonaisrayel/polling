const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();
const { pollRouter } = require('./routes');


// Set public folder 
app.use(express.static(path.join(__dirname, 'public')));



//Body parser midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Enable CORS
app.use(cors());
app.use('/poll', pollRouter);

const PORT = 4000;
//Start server 
app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));