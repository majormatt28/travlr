// GET homepage
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

// let fs = require('fs);
// let trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBoday.length) {
            message = 'No trips exist in our database!';
        }
    }
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
}

const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statustCode }, body) => {
            if (err) {
                copnsole.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};