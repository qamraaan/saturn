import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomSearchProps {
  onChange: ((text: string) => void) | undefined;
  placeholder?: string;
  value: string;
}

const CustomSearch: React.FC<CustomSearchProps> = ({
  onChange,
  placeholder = 'Search',
  value,
}) => {
  const theme = useTheme<Theme>();
  console.log('aafadf')
  const {colors, fontSize, borderRadii, spacing} = theme;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.appBackgroundColor,
      borderRadius: borderRadii.xxxs,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.xxs,
      width: '100%',
    },
    textInput: {
      flex: 1,
      fontSize: fontSize.xs,
      color: colors.textGray,
      borderWidth: 1,
      padding: spacing.xxs,
      borderColor: colors.textGray,
      borderRadius: borderRadii.xxxs
    },
    icon: {
      marginLeft: spacing.xxxs,
      color: colors.textGray,
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.textGray}
        style={styles.textInput}
      />
      <Icon name="search-outline" size={fontSize.ms} style={styles.icon} />
    </View>
  );
};

export default CustomSearch;
