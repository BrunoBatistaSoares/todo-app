//npm i cors bcrypt jsonwebtoken uuid dotenv pg

const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('get root')
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))