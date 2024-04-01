import {AppFonts} from '@src/assets/AppFonts';
import {showMessage} from 'react-native-flash-message';

export const showError = (error: string) => {
  showMessage({
    style: {alignItems: 'center'},
    titleStyle: {
      fontFamily: AppFonts.SourceSansRegular,
      fontSize: 14,
    },
    message: error ?? 'Something went wrong',
    type: 'danger',
    icon: 'danger',
  });
};

export const showSuccess = (message: string) => {
  showMessage({
    style: {alignItems: 'center'},
    titleStyle: {
      fontFamily: AppFonts.SourceSansRegular,
      fontSize: 14,
    },
    message: message,
    type: 'success',
    icon: 'success',
  });
};

export const showWarn = (message: string) => {
  showMessage({
    style: {alignItems: 'center'},
    titleStyle: {
      fontFamily: AppFonts.SourceSansRegular,
      fontSize: 14,
    },
    message: message,
    type: 'warning',
    icon: 'warning',
  });
};

export const showInfo = (message: string) => {
  showMessage({
    style: {alignItems: 'center'},
    titleStyle: {
      fontFamily: AppFonts.SourceSansRegular,
      fontSize: 14,
    },
    message: message,
    type: 'info',
    icon: 'info',
  });
};
