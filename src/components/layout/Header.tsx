import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '../typography/CustomText';
import {AppFonts} from '@src/assets/AppFonts';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';

type HeaderProps = {
  title?: string;
};
const Header: React.FC<HeaderProps> = ({title}) => {
  const theme = useTheme<Theme>();
  const {colors, spacing, fontSize} = theme;
  return (
    <View
      style={{
        alignItems: 'center',
        marginBottom: spacing.xs,
      }}>
      <CustomText
        fontFamily={AppFonts.SourceSansBold}
        fontSize={fontSize.ms}
        color={colors.textBlack}>
        {title}
      </CustomText>
    </View>
  );
};

export default Header;
