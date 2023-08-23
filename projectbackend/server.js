// server.js
const express = require('express');
const app = express();
const cors = require("cors");


const PORT = 3001;

app.use(cors());

// Mock data for the API
const mockData = [
    {
      "id": 0,
      "image": "https:\/\/extracts.panmacmillan.com\/site\/extr\/static\/jacketimages\/9780230771406.jpg",
      "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 1,
      "image": "https:\/\/extracts.panmacmillan.com\/site\/extr\/static\/jacketimages\/9781509896998.jpg",
      "data": "Pellentesque nec felis sed ligula cursus hendrerit."
    },
]

app.get('/api/books', (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
