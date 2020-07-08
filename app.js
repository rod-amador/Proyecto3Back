const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require ("mongoose");
const cors = require("cors")


require('dotenv').config();

// "mongodb+srv://Master:Master99.@cluster0-t6tpi.mongodb.net/Book?retryWrites=true&w=majority"
//DB remota --> ya cuando sean pruebas reemplazar el connect
mongoose.connect(process.env.DB, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,})
    .then(x => console.log(`Connected to Mongo! DB name: "${x.connections[0].name}"`) )
    .catch(  (err)=> console.error("Error connecting to mongo", err)  )


const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users");
const contentRouter = require("./routes/contents");
const app = express();

app.use(
    cors({origin: ["http://localhost:3000", "mongodb+srv://Master:Master99.@cluster0-t6tpi.mongodb.net/Book?retryWrites=true&w=majority"],
          credentials: true,
    })
  );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/users", usersRouter);
app.use("/content", contentRouter);

module.exports = app;
