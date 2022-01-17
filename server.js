const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Contect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); // parse incoming json data into req.body

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Contact Server API!' });
});

// define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static folder
  app.unsubscribe(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
