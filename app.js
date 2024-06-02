const express = require('express');
const path = require('path');
const app = express();

// Define o diretório para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Valohome.html'));
});

app.get('/agents', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Valoagents.html'));
});

app.get('/maps', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Valomaps.html'));
});

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
