var express = require('express')
    , urlHelper = require("./routes.js")
  , http = require('http')
  , config = require("./config");  


var app = express();

app.engine('html', require('ejs').renderFile);

app.configure(function(){
  app.set('port', config.port);
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');

  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

});
app.configure('development', function(){
  app.use(express.errorHandler());
});

urlHelper.setRequestUrl(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
