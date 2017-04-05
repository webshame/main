var test = require('./controllers/test');

//routes
module.exports = function(app, express) {
  //Test Route
  app.post('/api/test', test.response);
  
};