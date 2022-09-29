const express = require('express');
const app = express();
const weather = require('weather-js');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    weather.find({ search: 'Davao, PH', degreeType: 'C' }, function (err, result) {
        var weather_data = null;
        if (err) console.log(err);
        else {
            weather_data = result;
        }
        res.render('index', { panahon: weather_data });
    });
})

app.get('/other', function (req, res) {
    res.render('other');
})

app.listen(3000);
