import {View} from 'react-native';
import React from 'react';
import CustomText from '@src/components/typography/CustomText';
import {AppFonts} from '@src/assets/AppFonts';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';

type DetailsCardProps = {
  title?: string;
  value?: string | number;
};
const DetailsCard: React.FC<DetailsCardProps> = ({title, value}) => {
  const theme = useTheme<Theme>();
  const {colors} = theme;

  return (
    <View>
      <CustomText
        numberOfLines={1}
        ellipsizeMode="tail"
        fontFamily={AppFonts.SourceSansBold}
        color={colors.textGray}
        >
        {title}
      </CustomText>
      <CustomText
        numberOfLines={1}
        ellipsizeMode="tail"
        fontFamily={AppFonts.SourceSansMedium}
        color={colors.textBlack}>
        {value}
      </CustomText>
    </View>
  );
};

export default DetailsCard;
