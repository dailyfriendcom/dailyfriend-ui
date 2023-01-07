"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactHookForm = require("react-hook-form");
var _reactNativePaper = require("react-native-paper");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormRadioButtonGroup = _ref => {
  let {
    inputName,
    control,
    controllerOptions,
    error,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHookForm.Controller, _extends({}, controllerOptions, {
    name: inputName,
    control: control,
    render: _ref2 => {
      let {
        field: {
          onChange,
          value
        }
      } = _ref2;
      return /*#__PURE__*/React.createElement(_reactNativePaper.RadioButton.Group, _extends({}, props, {
        value: value,
        onValueChange: onChange
      }), props.children);
    }
  })), /*#__PURE__*/React.createElement(_reactNativePaper.HelperText, {
    type: "error",
    visible: !!error
  }, error));
};
var _default = FormRadioButtonGroup;
exports.default = _default;
//# sourceMappingURL=RadioButtonGroup.js.map