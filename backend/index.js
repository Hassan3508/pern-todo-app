import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 5004;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
