require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug')('app');

const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index', { title: 'API Express MySQL' });
});

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, _next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(port, () => debug(`Servidor rodando na porta ${port}`));
