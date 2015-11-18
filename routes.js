
exports.setRequestUrl=function(app){
    var indexObj = require('./controllers/index')

    app.get('/', indexObj.index);
}