// GET homepage
let fs = require('fs');

let trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaway', trips });
};

module.exports = {
    travel
};