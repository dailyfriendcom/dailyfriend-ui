function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
const FormTextInput = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Controller, _extends({}, props.controllerOptions, {
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
        React.createElement(TextInput, _extends({}, props, {
          onBlur: onBlur,
          onChangeText: onChange,
          value: value
        }))
      );
    }
  })), /*#__PURE__*/React.createElement(HelperText, {
    type: "error",
    visible: !!props.error
  }, props.error));
};
export default FormTextInput;
//# sourceMappingURL=TextInput.js.map