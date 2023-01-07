function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox, HelperText } from 'react-native-paper';
const FormCheckbox = _ref => {
  let {
    inputName,
    control,
    controllerOptions,
    error,
    checkboxComponent = 'default',
    ...props
  } = _ref;
  const CheckboxComponent = useMemo(() => {
    switch (checkboxComponent) {
      case 'android':
        return Checkbox.Android;
      case 'ios':
        return Checkbox.IOS;
      case 'item':
        return Checkbox.Item;
      default:
        return Checkbox;
    }
  }, [checkboxComponent]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Controller, _extends({}, controllerOptions, {
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
  })), /*#__PURE__*/React.createElement(HelperText, {
    type: "error",
    visible: !!error
  }, error));
};
export default FormCheckbox;
//# sourceMappingURL=Checkbox.js.map