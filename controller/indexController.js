var fs = require('fs');

const indexController = (req, res, next) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
}

module = module.exports = {indexController};