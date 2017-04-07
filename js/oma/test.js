define(["exports", "core/utils"], function (exports, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = undefined;

  var _utils2 = _interopRequireDefault(_utils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var run = exports.run = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(conf, doc, cb) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // do some DOM work the "doc" with "conf" 
              $("body > *", doc).wrapAll("<div class='container'></div>");
              //finally call cb()   
              cb();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function run(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
});
//# sourceMappingURL=test.js.map