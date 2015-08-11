var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express();

app.use(express.static('client'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
    res.render('home');
});


app.listen(8080);