// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from '@storybook/theming';
import logo from './logo.svg';

export default create({
  base: 'light',
  brandTitle: 'DossierData',
  brandUrl: 'https://dossierdata.nl',
  brandImage: logo,
});
