/**
 * Created by chrislynch on 8/17/15.
 */
var mongoose = require('mongoose'),
    options = {
        user: 'root',
        pass: 'root'
    };

mongoose.connect('mongodb://localhost/users', options);

var unitSchema = mongoose.schema({
    id: Number,
    user: String,
    pass: String,
    email: String
});


exports.findUser = function(callback) {
    unitSchema.find(function (err, kittens) {
        if (err) return console.error(err);
        callback(kittens);
    })
};

exports.addUser = function(array) {
    unitSchema.save(function (err,result) {
        if (err) return console.error(err);
        console.log(result);
    });
};

exports.rmUser = function(name) {
    unitSchema.findOneAndRemove({ Name: name }, function(err) {
        if (err) throw err;
        console.log('User deleted!');
    });
};