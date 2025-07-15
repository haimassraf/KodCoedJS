import express from 'express'
import { isUserNameExist } from './supabase.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.post('/login', async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        if (!userName || !password) {
            res.send("you dont have userName or password")
            return;
        }
        const data = await isUserNameExist(userName, password);
        if (data) {
            res.send("✅ Login successful")
        } else {
            res.send("❌ Wrong username or password")
        }
    } catch (err) {
        res.send({ error: err.message })
    }
})

app.get('/products')

app.post('/products', (req, res) => {
    res.send("Welcome to product")
})


app.listen(PORT, () => console.log(`Server Listen on Port: ${PORT}`));
