import 'dotenv/config';
import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

const route = express.Router();

app.use(route)

route.get('/api/v1',(req,res) => {
    res.send('HI')
})

app.listen(port,() => {
    console.log(`Server listening on port ${port}`)
})