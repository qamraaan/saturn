import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useRoute,
} from '@react-navigation/native';
import CustomText from '../typography/CustomText';
import { AppFonts } from '@src/assets/AppFonts';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@src/theme/theme';
interface BackHeaderProps {
  navigation: NavigationProp<ParamListBase>;
  iconName?: string;
  style?: ViewStyle;
  hideRouteName?: boolean;
}
const BackHeader: React.FC<BackHeaderProps> = ({
  navigation,
  iconName,
  style,
  hideRouteName,
}) => {
    const route = useRoute();
    const theme = useTheme<Theme>();
    const {spacing, colors, fontSize, } = theme;

    const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    paddingVertical: spacing.xxs,
    backgroundColor: 'transparent',
  },
});

  return (
    <View style={[styles.backContainer, style]}>
      <Pressable
        hitSlop={30}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        {iconName ? (
          iconName
        ) : (
          <Icon
            name='arrow-back-outline'
            size={fontSize.m}
            color={colors.textBlack}
            style={{
              marginLeft: spacing.xxs
            }}
          />
        )}
        <View style={{
          alignItems:'center',
          justifyContent: 'center',
          width: '90%'
        }}>
        <CustomText
          style={{display: !hideRouteName ? 'flex' : 'none'}}
          fontFamily={AppFonts.SourceSansBold}
          fontSize={fontSize.ms}
          color={colors.textBlack}
          >
          {route.name}
        </CustomText>
        </View>
      </Pressable>
    </View>
  );
};
export default BackHeader;
