'use strict';

var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');
var mock = require('ruff-mock');

var verify = mock.verify;

var appPath = path.join(__dirname, '..');

module.exports = {
    'test should run application': function (done) {
        appRunner
            .run(appPath, function () {
                verify($('#lcd')).turnOn();
            })
            .end(function () {
                verify($('#lcd')).turnOff();
                done();
            });
    }
};

test.run(module.exports);