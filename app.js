const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const indexRouter = require('./backend/routes/index.routes');
const userRouter = require('./backend/routes/user.routes');
const connectToDB = require('./backend/Config/db');
const path = require('path'); // ✅ Correct way
require('dotenv').config();

connectToDB();

app.set('view engine', 'ejs');

// ✅ Correct views folder path
app.set('views', path.join(__dirname, 'frontend', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
