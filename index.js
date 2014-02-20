define(function (require, exports, module) {
  var LocalStorage = require('./lib/LocalStorage');
  var LocalStorageProxy = require('./LocalStorageProxy');
  var toDataUrl = require('./lib/toDataUrl');

  exports.toDataUrl = toDataUrl;
  exports.LocalStorage = LocalStorage;
  exports.LocalStorageProxy = LocalStorageProxy;
});