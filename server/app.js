const express = require('express');
const usersRoutes = require('./routes/DBOperRoutes');

module.exports = (pool) => {
    const app = express();

    app.use(express.json());

    app.use((req, res, next) => {
        req.pool = pool;
        next();
    });

    app.use('/api/users', usersRoutes);

    return app;
};
