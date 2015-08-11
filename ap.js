var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('client', express.static('client'));


app.get('/', function (req, res) {
    res.render('home');
});


app.listen(process.env.PORT || 9000, process.env.IP || "0.0.0.0", function(){
    console.log("Its listening over 9000");
});
