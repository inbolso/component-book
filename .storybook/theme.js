import { create } from '@storybook/theming';
import brandImage from '../src/assets/logo.svg';

export default create({
  brandTitle: 'inBolso',
  brandUrl: 'https://www.inbolso.com.br/',
  brandImage,

  base: 'light',
  appBg: '#f0f1f5',

  colorPrimary: '#00c65e',

  colorSecondary: '#5ae082',
  appBorderColor: '#e4e5eb',
  appBorderRadius: 4,

  fontBase: '"Poppins", sans-serif',
  textColor: '#3c3f47',
  textInverseColor: '#fff',

  barTextColor: '#3c3f47',
  barSelectedColor: '#5ae082',

  inputBg: '#fafbfc',
  inputBorder: '#e4e5eb',
  inputTextColor: '#3c3f47',
  inputBorderRadius: 4,

  fontCode:
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
});
