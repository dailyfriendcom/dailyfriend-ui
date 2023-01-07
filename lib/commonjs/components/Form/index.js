"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _Picker = _interopRequireDefault(require("./Picker"));
var _RadioButton = _interopRequireDefault(require("./RadioButton"));
var _SegmentedButtons = _interopRequireDefault(require("./SegmentedButtons"));
var _Switch = _interopRequireDefault(require("./Switch"));
var _TextInput = _interopRequireDefault(require("./TextInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Form = {
  TextInput: _TextInput.default,
  Picker: _Picker.default,
  Checkbox: _Checkbox.default,
  RadioButton: _RadioButton.default,
  SegmentedButtons: _SegmentedButtons.default,
  Switch: _Switch.default
};
exports.Form = Form;
//# sourceMappingURL=index.js.map