import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import Routes from '@src/navigation/Routes';
import theme from '@src/theme/theme';
import FlashMessage from 'react-native-flash-message';
import { Platform } from 'react-native';



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <FlashMessage
          duration={3000}
          position="top"
          statusBarHeight={Platform.OS === 'ios' ? 40 : 10}
        />
    </ThemeProvider>
  );
}
