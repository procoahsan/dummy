import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {bookRoutes} from './routes/BookRoutes'
dotenv.config();
const app = express()

const PORT = process.env.PORT || 5000
const Connection = "mongodb+srv://prcoahsan:hello123@cluster0.vdyufty.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Connection , {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(express.json())
app.use(cors());
app.use('/book' , bookRoutes) 