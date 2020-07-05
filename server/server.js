const express = require('express');
const path = require('path');
const enviro = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const helmet = require('helmet');
const hpp = require('hpp');
const RateLimit = require('express-rate-limit');
const XssClean = require('xss-clean');
const MongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');
const ErrorHandler = require('./Middleware/Error');
const ConnectDB = require('./Config/DataBaseConnection');
const rateLimit = require('express-rate-limit');

const app = express();

// Enable cross domains
app.use(cors());

// Body parser
app.use(express.json()); 
 
// Cookie parser
app.use(cookieParser());

// load env vars
enviro.config({ path: './Config/Config.env' });

// Connect to database
ConnectDB();

app.use(express.urlencoded({ extended: true }));

// Dev logging middleware
if ((process.NODE_ENV = 'devolopment')) {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());

// Sanitize dat
app.use(MongoSanitize());

// Set security hearders
app.use(helmet());

// Prevent  cross site scripting
app.use(XssClean());

// Rate limiting
const limit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
});

app.use(limit);

// Prevent http param pollution
app.use(hpp());

// Set static file
app.use(express.static(path.join(__dirname, 'public')));

//Mount routers
app.use('/api/user/preference', require('./Routes/UserPrefence'));
app.use('/api/auth', require('./Routes/Auth'));

// Error handler
app.use(ErrorHandler);

const port = process.env.PORT || 8000;
const server = app.listen(port, () =>
  console.log(
    `Server run in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
);

// Handle unandled promise rejection
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
