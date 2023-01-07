/// <reference types="react" />
import { ImageProps as NativeImageProps } from 'react-native';
interface ImageProps extends NativeImageProps {
    assetName?: string;
    assetGroup?: string;
}
declare const Image: React.FC<ImageProps>;
export default Image;
//# sourceMappingURL=Image.d.ts.map