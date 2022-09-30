const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    let friends = ['lexi', 'matt', 'ally', 'nate', 'james', 'anna'];
    res.status(200).send(friends);
})

app.get('/weather/:temperature', (req, res) => {
    const {temperature} = req.params;
    const answer = `<h3> It was ${temperature} today</h3>`;
    res.status(200).send(answer);
})

app.listen(4000, () => console.log('server is running on port 4000'));