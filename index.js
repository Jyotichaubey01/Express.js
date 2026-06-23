// index.js
const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// serves everything in the "public" folder, including index.html
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Running at http://localhost:3000'));