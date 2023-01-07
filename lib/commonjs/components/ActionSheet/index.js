"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ActionSheetWrapper = _interopRequireDefault(require("./ActionSheetWrapper"));
var _ActionSheet = _interopRequireDefault(require("../../utils/ActionSheet"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-expect-error
_ActionSheetWrapper.default.show = _ActionSheet.default.show;

// @ts-expect-error
_ActionSheetWrapper.default.Provider = _ActionSheet.default.Provider;
var _default = _ActionSheetWrapper.default;
exports.default = _default;
//# sourceMappingURL=index.js.map