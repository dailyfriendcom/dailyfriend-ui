function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Controller } from 'react-hook-form';
import { HelperText } from 'react-native-paper';
import Picker from '../Picker/Picker';
const FormPicker = _ref => {
  let {
    inputName,
    control,
    controllerOptions,
    error,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Controller, _extends({}, controllerOptions, {
    name: inputName,
    control: control,
    render: _ref2 => {
      let {
        field: {
          onChange,
          value
        }
      } = _ref2;
      return /*#__PURE__*/React.createElement(Picker, _extends({}, props, {
        onChange: onChange,
        value: value,
        error: error
      }));
    }
  })), /*#__PURE__*/React.createElement(HelperText, {
    type: "error",
    visible: !!error
  }, error));
};
export default FormPicker;
//# sourceMappingURL=Picker.js.map