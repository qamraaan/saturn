import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import CustomText from '../typography/CustomText';
import {useTheme} from '@shopify/restyle';
import {FormikValues, useFormikContext} from 'formik';
import {Theme} from '@src/theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomTextInputProps extends TextInputProps, ViewStyle {
  name: string;
  type?: 'text' | 'password';
  label?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  hasRightIcon?: boolean;
  onRightIconClick?: () => void;
  inputRef?: React.Ref<TextInput>;
  passwordVisible?: boolean;
  onPasswordVisibilityChange?: (visible: boolean) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  name,
  type,
  label,
  hasRightIcon,
  onRightIconClick,
  isDisabled,
  isRequired,
  inputRef,
  passwordVisible,
  onPasswordVisibilityChange,
  ...restProps
}) => {
  const theme = useTheme<Theme>();
  const {colors, fontSize, borderRadii, spacing} = theme;

  const handlePasswordVisibility = () => {
    if (onPasswordVisibilityChange) {
      onPasswordVisibilityChange(!passwordVisible);
    }
  };

  const rightIconName =
    type === 'password'
      ? passwordVisible
        ? 'eye-outline'
        : 'eye-off-outline'
      : '';

  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.ms,
    },
    label: {
      marginBottom: spacing.xxxs,
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: borderRadii.xxxs,
      paddingHorizontal: spacing.xxs,
    },
    textInput: {
      flex: 1,
      fontSize: fontSize.xs,
      color: colors.textPrimaryColor,
      borderWidth: 1,
      padding: spacing.xs,
      borderColor: colors.textGray,
      borderRadius: borderRadii.xxxs
    },
    rightIcon: {
      marginLeft: spacing.xxs,
    },
    error: {
      color: colors.errorColor,
    },
  });

  const {values, handleChange, setFieldTouched, errors, touched} =
    useFormikContext<FormikValues>();
  return (
    <View style={styles.container}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
      <View style={styles.textInputContainer}>
        <TextInput
          ref={inputRef}
          secureTextEntry={type === 'password' && !passwordVisible}
          value={values[name]}
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
          placeholderTextColor={colors.placeholderColor}
          style={styles.textInput}
            {...restProps}

        />
        {hasRightIcon && (
          <Pressable onPress={handlePasswordVisibility}>
            {Platform.OS === 'ios' ? (
              <TouchableOpacity style={styles.rightIcon}>
                <Icon name={rightIconName} />
              </TouchableOpacity>
            ) : (
              <Icon name={rightIconName} style={styles.rightIcon} />
            )}
          </Pressable>
        )}
      </View>
            {errors[name] !== undefined &&
              touched[name] &&
              errors[name] !== null && (
                <CustomText color={colors.textWarnColor} marginLeft={spacing.xxs}>
                  {String(errors[name])}
                </CustomText>
              )}
    </View>
  );
};

export default CustomTextInput;
