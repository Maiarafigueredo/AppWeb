import express from 'express';
import cors from 'cors';
import routes from './scr/srcRoutes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.use(cors());

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://test:ccttestuser@cluster0-elfss.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

