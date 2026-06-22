const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


//middleare

const harrayMiddleware = (req, res, next)=> {
    console.log(req)
}


// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(harrayMiddleware)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  // res.send('about');
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.json({ "jyoti": 44 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});