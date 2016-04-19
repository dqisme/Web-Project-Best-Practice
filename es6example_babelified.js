'use strict';

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WhatAClass = function WhatAClass() {
    _classCallCheck(this, WhatAClass);

    var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
    console.log((0, _uniq2.default)(data));
};

var whatAClass = new WhatAClass();
