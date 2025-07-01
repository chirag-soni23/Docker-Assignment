const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('form');  
});


app.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  try {
    const response = await axios.post('http://backend:5000/submit', { name, email });
    res.render('result', { data: response.data });
  } catch (error) {
    console.error('Axios error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error sending data to backend.');
  }
});


app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
