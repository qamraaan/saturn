import {createTheme} from '@shopify/restyle';

const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3',
  redlight: '#FFEBEB',
  orangeLight: '#FFECE2',
  appBackgroundColor: '#FFFFFF',
  backgroundSecondary: '#F7F7F7',
  headerTitleColor: '#011C37',
  linkColor: '#065DC3',
  textPrimaryColor: '#595959',
  textWarnColor: '#FF5C01',
  buttonBgColor: '#011C37',
  buttonTextColor: '#FFFFFF',
  inputBorderColor: '#C0C0C0',
  borderColor: '#dfdfdf',
  inputTextColor: '#011C37',
  cardPrimaryBackground: '#FFFFFF',
  cardSecondaryBackground: '#ECF6FF',
  cardTertiaryBackground: '#0D78F6',
  buttonDisabled: '#DDDDDD',
  textWhite: '#FFFFFF',
  textBlack: '#000000',
  textGray: 'gray',
  inputBg: 'rgba(255, 255, 255, 0.57)',
  reviewDivderBackground: '#F0F0F0',
  heartFillColor: 'red',
  errorColor: '#800000',
  buttonBgSecondary: '#01235D',
  buttonBgSecondaryDisabled: '#5C5C5C',
  successBg: '#F0FFEA',
  textRed: 'red',
  overlayBgColor: 'rgba(0, 0, 0, 0.83)',
  cancelColor: '#E71111',
  darkBg: '#151D1E',
  textAreaBg: '#F5F5F5',
  placeholderColor: '#AAAAAA',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    headerTitleColor: palette.headerTitleColor,
    linkColor: palette.linkColor,
    textColor: palette.textPrimaryColor,
    textWarnColor: palette.textWarnColor,
    buttonBgColor: palette.buttonBgColor,
    buttonTextColor: palette.buttonTextColor,
    inputBorderColor: palette.inputBorderColor,
    inputTextColor: palette.inputTextColor,
    cardPrimaryBackground: palette.cardPrimaryBackground,
    cardSecondaryBackground: palette.cardSecondaryBackground,
    cardTertiaryBackground: palette.cardTertiaryBackground,
    buttonDisabled: palette.buttonDisabled,
    appBackgroundColor: palette.appBackgroundColor,
    textWhite: palette.textWhite,
    textBlack: palette.textBlack,
    textGray: palette.textGray,
    inputBg: palette.inputBg,
    reviewDivderBackground: palette.reviewDivderBackground,
    heartFillColor: palette.heartFillColor,
    errorColor: palette.errorColor,
    backgroundSecondary: palette.backgroundSecondary,
    buttonBgSecondary: palette.buttonBgSecondary,
    buttonBgSecondaryDisabled: palette.buttonBgSecondaryDisabled,
    successBg: palette.successBg,
    textRed: palette.textRed,
    overlayBgColor: palette.overlayBgColor,
    borderColor: palette.borderColor,
    textPrimaryColor: palette.textPrimaryColor,
    cancelColor: palette.cancelColor,
    redLight: palette.redlight,
    orangeLight: palette.orangeLight,
    darkBg: palette.darkBg,
    textAreaBg: palette.textAreaBg,
    placeholderColor: palette.placeholderColor,
  },
  spacing: {
    zero: 0,
    minusxl: -15,
    minusl: -10,
    minusxs: -4,
    xxxxxxs: 1,
    xxxxxs: 2,
    xxxxs: 4,
    xxxs: 6,
    xxs: 8,
    xs: 12,
    ms: 14,
    s: 16,
    m: 20,
    mm: 22,
    l: 24,
    xl: 28,
    xxl: 30,
    xxxl: 32,
    xxxxl: 36,
    xxxxxl: 40,
    xxxxxxl: 45,
    xxxxxxxl: 50,
  },
  fontSize: {
    xxxss: 6,
    xxss: 8,
    xxs: 12,
    xss: 10,
    xs: 14,
    s: 16,
    ms: 18,
    m: 20,
    mm: 22,
    l: 24,
    xl: 28,
    xxl: 32,
    xxxl: 36,
  },
  borderRadii: {
    zero: 0,
    xxxxs: 2,
    xxxs: 4,
    xxs: 6,
    xs: 8,
    s: 10,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 28,
    high: 100,
    ultraHigh: 150,
  },
});

export type Theme = typeof theme;
export default theme;