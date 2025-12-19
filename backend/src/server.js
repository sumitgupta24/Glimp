import 'dotenv/config';
import connectDB from './db/database.js'
import { app } from "./app.js"

const port = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at ${port}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB connection Failed!", error)
    })