const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Docklift Express Server!',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
