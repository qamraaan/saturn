import React, {ReactNode} from 'react';
import {
  Pressable,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import CustomText from '../typography/CustomText';
import {AppFonts} from '@src/assets/AppFonts';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';

interface CustomButtonProps {
  children?: ReactNode;
  onPress?: () => void;
  label?: string;
  isLoading?: boolean;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onPress,
  label,
  isLoading,
  bgColor,
  style,
}) => {
  const theme = useTheme<Theme>();
  const {colors, spacing, borderRadii} = theme;
  const styles = StyleSheet.create({
    container: {
      paddingVertical: spacing.ms,
      paddingHorizontal: spacing.m,
      borderRadius: borderRadii.xxxs,
    },
  });
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={[
        styles.container,
        {
          backgroundColor: bgColor ? bgColor : colors.linkColor,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      android_ripple={{color: colors.buttonTextColor}}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.textWhite} />
      ) : (
        <>
          {label && (
            <CustomText
              fontFamily={AppFonts.SourceSansSemiBold}
              color={colors.textWhite}>
              {label}
            </CustomText>
          )}
          {children}
        </>
      )}
    </Pressable>
  );
};

export default CustomButton;
