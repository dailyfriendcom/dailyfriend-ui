function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Image as NativeImage } from 'react-native';
import Assets from '../utils/Assets';
const Image = _ref => {
  let {
    assetName,
    assetGroup,
    ...props
  } = _ref;
  const source = assetName ? Assets.getAsset(assetName, assetGroup) : props.source;
  return /*#__PURE__*/React.createElement(NativeImage, _extends({
    source: source
  }, props));
};
export default Image;
//# sourceMappingURL=Image.js.map