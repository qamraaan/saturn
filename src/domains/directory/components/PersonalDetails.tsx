import {View} from 'react-native';
import React from 'react';
import CustomText from '@src/components/typography/CustomText';
import {AppFonts} from '@src/assets/AppFonts';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

type PersonalDetailsProps = {
  icon: string;
  detail?: string | number;
};
const PersonalDetails: React.FC<PersonalDetailsProps> = ({detail, icon}) => {
  const theme = useTheme<Theme>();
  const {colors, spacing, fontSize} = theme;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems:'center',
        columnGap: spacing.xxxs
      }}>
      <Icon name={icon} size={18}/>
      <CustomText
        numberOfLines={1}
        ellipsizeMode="tail"
        fontSize={fontSize.xs}
        fontFamily={AppFonts.SourceSansBold}
        color={colors.textBlack}>
        {detail}
      </CustomText>
    </View>
  );
};

export default PersonalDetails;
