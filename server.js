const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Dl156789123',
      database : 'smart-brain'
    }
});

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send(database.users)
})

app.post('/register', register.handleRegister(db, bcrypt));
app.post('/signin', signin.handleSignin(db, bcrypt));
app.get('/profile/:id', profile.handleProfile(db));
app.put('/image', image.handleImage(db));
app.post('/imageurl', image.handleAPICall());

app.listen(3001, () =>{
    console.log('App running nicely');
});