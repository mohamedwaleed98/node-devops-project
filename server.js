
const express = require('express');
const app = express();

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydatabase';


// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
  const db = client.db('mydatabase');
  const collection = db.collection('data');
  // Save data to MongoDB
  app.post('/data', (req, res) => {
    const data = req.body;
    collection.insertOne(data, (err, result) => {
      if (err) throw err;
      res.send('Data saved successfully');
    });
  });
});
