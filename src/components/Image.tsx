import {
  Image as NativeImage,
  ImageProps as NativeImageProps,
} from 'react-native';
import Assets from '../utils/Assets';

interface ImageProps extends NativeImageProps {
  assetName?: string;
  assetGroup?: string;
}

const Image: React.FC<ImageProps> = ({ assetName, assetGroup, ...props }) => {
  const source: NativeImageProps['source'] = assetName
    ? Assets.getAsset(assetName, assetGroup)!
    : props.source;

  return <NativeImage source={source} {...props} />;
};

export default Image;
