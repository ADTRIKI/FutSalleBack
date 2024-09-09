const express = require('express');
const app = express();
const port = 5001;

app.use(express.json()); // Middleware pour gérer les données JSON

// Données initiales
const players = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Player 2' }
];

const matches = [
  { id: 1, match: 'Match 1' },
  { id: 2, match: 'Match 2' },
  { id: 3, match: 'Match 3' }
];

// Route de bienvenue
app.get('/', (req, res) => {
  res.send('Bienvenue sur le back de l\'app React');
});

// --- CRUD pour les joueurs ---

// Lire tous les joueurs (Read)
app.get('/api/players', (req, res) => {
  res.json(players);
});

// Créer un nouveau joueur (Create)
app.post('/api/players', (req, res) => {
  const newPlayer = {
    id: players.length + 1,
    name: req.body.name
  };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// Mettre à jour un joueur (Update)
app.put('/api/players/:id', (req, res) => {
  const playerId = parseInt(req.params.id);
  const player = players.find(p => p.id === playerId);
  
  if (!player) {
    return res.status(404).send('Le joueur n\'a pas été trouvé');
  }

  player.name = req.body.name;
  res.json(player);
});

// Supprimer un joueur (Delete)
app.delete('/api/players/:id', (req, res) => {
  const playerId = parseInt(req.params.id);
  const playerIndex = players.findIndex(p => p.id === playerId);
  
  if (playerIndex === -1) {
    return res.status(404).send('Le joueur n\'a pas été trouvé');
  }

  players.splice(playerIndex, 1);
  res.status(204).send();
});

// --- CRUD pour les matchs ---

// Lire tous les matchs (Read)
app.get('/api/matches', (req, res) => {
  res.json(matches);
});

// Créer un nouveau match (Create)
app.post('/api/matches', (req, res) => {
  const newMatch = {
    id: matches.length + 1,
    match: req.body.match
  };
  matches.push(newMatch);
  res.status(201).json(newMatch);
});

// Mettre à jour un match (Update)
app.put('/api/matches/:id', (req, res) => {
  const matchId = parseInt(req.params.id);
  const match = matches.find(m => m.id === matchId);
  
  if (!match) {
    return res.status(404).send('Le match n\'a pas été trouvé');
  }

  match.match = req.body.match;
  res.json(match);
});

// Supprimer un match (Delete)
app.delete('/api/matches/:id', (req, res) => {
  const matchId = parseInt(req.params.id);
  const matchIndex = matches.findIndex(m => m.id === matchId);
  
  if (matchIndex === -1) {
    return res.status(404).send('Le match n\'a pas été trouvé');
  }

  matches.splice(matchIndex, 1);
  res.status(204).send();
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
