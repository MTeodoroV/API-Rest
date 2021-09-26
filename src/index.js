import express from 'express';
import bodyParser from 'body-parser';
import CORS from 'cors';
import Movie from './routes/movie';
import Series from './routes/series';
import Account from './routes/account';
import Favorites from './routes/favorites';
import WishList from './routes/wishList';
import Auth from './routes/auth';

const database = require('./config/database');
const Table = require('./database/table');


Table.init(database)

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

app.use('/movie', Movie);
app.use('/series', Series);
app.use('/account', Account);
app.use('/favorites', Favorites);
app.use('/wishList', WishList);
app.use('/auth', Auth);

app.listen(3000);
