'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.createToken = createToken;
exports.checkToken = checkToken;
exports.getUserFromHeader = getUserFromHeader;

var _jsonwebtoken = require('jsonwebtoken');

var _serverConf = require('../serverConf');

var _serverConf2 = _interopRequireDefault(_serverConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createToken(user) {
  return new _promise2.default(function (resolve) {
    // Mongoose objects are not true JS objects.
    // Call toObject() on user if the method exists to turn mongoose model to a pure object.
    var payload = !!user.toObject ? user.toObject() : user;
    (0, _jsonwebtoken.sign)(payload, _serverConf2.default.secret, { expiresIn: '2 days', issuer: 'http://amp.pharm.mssm.edu/L1000/' }, function (token) {
      return resolve(token);
    });
  });
}

function checkToken(token) {
  return new _promise2.default(function (resolve, reject) {
    (0, _jsonwebtoken.verify)(token, _serverConf2.default.secret, { issuer: 'http://amp.pharm.mssm.edu/L1000/' }, function (err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

function getUserFromHeader(ctx) {
  return new _promise2.default(function (resolve, reject) {
    var authHeader = ctx.request.headers.authorization;
    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
      var token = authHeader.split(' ')[1];
      checkToken(token).then(function (user) {
        return resolve(user);
      }).catch(function (err) {
        return reject(err);
      });
    } else {
      var errorText = 'Authorization header not sent with request or token is invalid.';
      ctx.throw(401, errorText);
      reject(new Error(errorText));
    }
  });
}