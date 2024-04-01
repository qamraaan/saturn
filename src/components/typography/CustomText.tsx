import {AppFonts} from '@src/assets/AppFonts';
import React, {ReactNode} from 'react';
import { TextProps } from 'react-native';
import {Text, TextStyle} from 'react-native';

interface CustomTextProps extends TextProps, TextStyle {
  children: ReactNode;
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  fontFamily,
  fontSize,
  style,
  color,
  ...restProps
}) => {
  return (
    <Text
      {...restProps}
      style={[
        style,
        {
          fontFamily: fontFamily ? fontFamily : AppFonts.SourceSansRegular,
          fontSize: fontSize? fontSize: 16,
          color,
          fontWeight: undefined,
        },
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
