"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../core");

var Moment = (0, _core.twitterEmbedComponent)({
  embedComponent: function embedComponent(twttr) {
    var _twttr$widgets;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_twttr$widgets = twttr.widgets).createMoment.apply(_twttr$widgets, args);
  },
  props: {
    errorMessage: {
      type: String,
      default: 'Whoops! We couldn\'t access this Moment.'
    },
    errorMessageClass: {
      type: String,
      required: false
    },
    widgetClass: {
      type: String,
      required: false
    }
  }
});
var _default = Moment;
exports.default = _default;