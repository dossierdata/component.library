import 'dossierdata-component-library/src/styles/main.scss';
import '@storybook/addon-console';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Introduction',
        'Tokens',
        'Components',
      ]
    },
    showPanel: true,
    isToolshown: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
