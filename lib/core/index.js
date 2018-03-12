var Analytics = require('./analytics');
var fs = require('fs');
var path = require('path');

var analytics = new Analytics();

analytics.require = require;

analytics.VERSION = require('../../package.json').version;
analytics.AGREEMENT = fs.readFileSync(path.join(__dirname, '../../AGREEMENT'), 'utf-8');

module.exports = analytics;