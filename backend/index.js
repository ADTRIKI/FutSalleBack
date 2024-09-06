const express = require('express');
const app = express();
const port = 5001;


const players = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Player 2' }
];

const matches = [
  { id: 1, match: 'Match 1' },
  { id: 2, match: 'Match 2' },
  { id: 3, match: 'Match 3' }
];

app.get('/api/players', (req, res) => {
  res.json(players);
});

app.get('/api/matches', (req, res) => {
  res.json(matches);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Bienvenue sur le back de app react');
  });
  