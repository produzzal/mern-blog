import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/user.model.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Mongodb is connected')).catch(err => {
        console.log(err);
    })

const app = express();
app.use(express.json());

app.listen(3000, () => { console.log("Server is running on port 3000!!") })


app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User(
        {
            username, email, password
        }
    )
    await newUser.save();
    res.json("New user created");
})