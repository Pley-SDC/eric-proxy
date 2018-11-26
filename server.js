require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

app.get('/:restaurant_id', (req, res) => {
  const options = {
    root: path.join(__dirname, 'public'),
  };
  res.sendFile('index.html', options);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
