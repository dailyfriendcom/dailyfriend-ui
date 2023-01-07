"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactHookForm = require("react-hook-form");
var _reactNativePaper = require("react-native-paper");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormTextInput = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHookForm.Controller, _extends({}, props.controllerOptions, {
    name: props.inputName,
    control: props.control,
    render: _ref => {
      let {
        field: {
          onChange,
          onBlur,
          value
        }
      } = _ref;
      return (
        /*#__PURE__*/
        // @ts-ignore
        React.createElement(_reactNativePaper.TextInput, _extends({}, props, {
          onBlur: onBlur,
          onChangeText: onChange,
          value: value
        }))
      );
    }
  })), /*#__PURE__*/React.createElement(_reactNativePaper.HelperText, {
    type: "error",
    visible: !!props.error
  }, props.error));
};
var _default = FormTextInput;
exports.default = _default;
//# sourceMappingURL=TextInput.js.map