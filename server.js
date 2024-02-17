const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const routes = require('./controllers');
const sequelize = require('./client/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(cors({
    origin: 'http://localhost:5173', // Specify your client's origin
    credentials: true // Allow cookies to be sent with requests
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file serving middleware should be placed here
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Error handling middleware should be placed at the end
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port http://localhost:${PORT}/`));
});
