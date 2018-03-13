var Analytics = require('./analytics');
var analytics = new Analytics();

analytics.require = require;

analytics.VERSION = require('../../package.json').version;
analytics.AGREEMENT = 'Version 1.0.0\nThis is a Licence Agreement (the "Agreement") for software modules owned by resin.io (Resin) ' +
    'that are used to connect to Resin\'s analytics infrastructure.\nPlease read this Agreement.' +
    'The software consists, amongst others, of an analytics module. This module exposes an interface through which analytics data ' +
    'is collected during a user\'s normal runtime execution. This data can be used and analyzed in order to provide insights regarding the ' +
    'product\'s capabilities and the users\' behavior, aiming to improve the overall user experience.\n' +
    'By enabling the analytics module you agree to anonymously report errors and usage statistics to Resin.';

module.exports = analytics;