"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactHookForm = require("react-hook-form");
var _reactNativePaper = require("react-native-paper");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormCheckbox = _ref => {
  let {
    inputName,
    control,
    controllerOptions,
    error,
    checkboxComponent = 'default',
    ...props
  } = _ref;
  const CheckboxComponent = (0, _react.useMemo)(() => {
    switch (checkboxComponent) {
      case 'android':
        return _reactNativePaper.Checkbox.Android;
      case 'ios':
        return _reactNativePaper.Checkbox.IOS;
      case 'item':
        return _reactNativePaper.Checkbox.Item;
      default:
        return _reactNativePaper.Checkbox;
    }
  }, [checkboxComponent]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHookForm.Controller, _extends({}, controllerOptions, {
    name: inputName,
    control: control,
    defaultValue: false,
    render: _ref2 => {
      let {
        field: {
          onChange,
          value
        }
      } = _ref2;
      return (
        /*#__PURE__*/
        // @ts-ignore
        React.createElement(CheckboxComponent, _extends({}, props, {
          onPress: () => onChange(!value),
          status: value ? 'checked' : 'unchecked'
        }))
      );
    }
  })), /*#__PURE__*/React.createElement(_reactNativePaper.HelperText, {
    type: "error",
    visible: !!error
  }, error));
};
var _default = FormCheckbox;
exports.default = _default;
//# sourceMappingURL=Checkbox.js.map