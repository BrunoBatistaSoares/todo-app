//npm i bcrypt jsonwebtoken uuid 

const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('get root')
});

//get all todos
app.get('/todos/:userEmail', async (req, res) => {
    const { userEmail } = req.params

    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (err) {
        console.error(err);
    }
})

/* create a new todo */

app.get('/todos', async (req, res) => {
    console.log(req)
    const userEmail = 'aa@aa'

    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (err) {
        console.error(err);
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))