import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface CustomLayoutProps {
  children: ReactNode;
  style?: ViewStyle;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[{flex: 1}, style]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1,}}>
            {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomLayout;
