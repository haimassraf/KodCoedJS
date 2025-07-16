import express from 'express'
import "dotenv/config"
import { insertData, getAllData, getHighReports, changeConfirmToTrue } from './db_function.js';


const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.get('/reports/high', async (req, res) => {
    const data = await getHighReports();
    res.send(data)
});

app.get('/reports', async (req, res) => {
    const data = await getAllData();
    res.send(data);
});

app.post('/reports', async (req, res) => {
    try {
        const body = req.body;
        if (!body.fieldCode || !body.tryLocation || !body.threatLevel || !body.description) {
            throw new Error("You have missing values at the body")
        }
        else if (body.threatLevel > 5 || body.threatLevel < 1) {
            throw new Error("'threatLevel' should be between 1-5")
        }
        const data = await insertData(body);
        res.send(data);
    } catch (err) {
        res.send("Error: " + err.message)
    }

})

app.put('/reports/:id/confirm', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await changeConfirmToTrue(id);
        res.send(data);
    } catch (err) {
        console.log("Error: " + err.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});