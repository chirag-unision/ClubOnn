const express= require('express')
const app= express()
const port= 3100

//Routers
const LoginRoute= require('./routes/login')
const ClubInfoRoute= require('./routes/getClubInfo')
const GetClubsRoute= require('./routes/getClubs')
const GetFollowingsRoute= require('./routes/getFollowings')
const GetCategories= require('./routes/getCategories')
const SetCategories= require('./routes/setCategories')
const GetSuggestions= require('./routes/getSuggestions')

const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('./sequelize');

sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

const db= {}; 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users= require('./modals/Users')(sequelize, DataTypes);
db.clubs= require('./modals/Clubs')(sequelize, DataTypes);
db.category= require('./modals/Categories')(sequelize, DataTypes);
db.requests= require('./modals/JoinRequests')(sequelize, DataTypes);

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hey there! This is ClubOnn backend.');
});

function middleDB(req, res, next) {
  req.db = db;
  next();
}

app.use('/login', middleDB, LoginRoute);
app.use('/getclubinfo', middleDB, ClubInfoRoute);
app.use('/getclubs', middleDB, GetClubsRoute);
app.use('/getfollowings', middleDB, GetFollowingsRoute);
app.use('/getcategories', middleDB, GetCategories);
app.use('/setcategories', middleDB, SetCategories);
app.use('/getsuggestions', middleDB, GetSuggestions);

app.use((req, res) => {
    res.status(404).send('Not found!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
