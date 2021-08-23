import { create } from '@storybook/theming';
import brandImage from '../src/stories/assets/logo.svg';

export default create({
  brandTitle: 'inBolso',
  brandUrl: 'https://www.inbolso.com.br/',
  brandImage,

  base: 'light',
  appBg: '#f0f1f5',

  colorPrimary: '#00c65e',

  colorSecondary: '#00c65e',
  appBorderColor: '#e4e5eb',
  appBorderRadius: 4,

  fontBase: '"Poppins", sans-serif',
  textColor: '#3c3f47',
  textInverseColor: '#fff',

  barTextColor: '#3c3f47',
  barSelectedColor: '#00c65e',

  inputBg: '#fafbfc',
  inputBorder: '#e4e5eb',
  inputTextColor: '#3c3f47',
  inputBorderRadius: 4,
});
