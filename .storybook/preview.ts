import { Preview } from 'storybook-solidjs';
import { render } from 'solid-js/web';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      controls: { sort: 'requiredFirst' },
      // source: {
      //   code: null,
      // },
    },
    a11y: {
      options: {
        runOnly: {
          type: 'tag',
          values: [
            'wcag2a', //WCAG 2.0 Level A
            'wcag2aa', //WCAG 2.0 Level AA
            'wcag21a', //WCAG 2.1 Level A
            'wcag21aa', //WCAG 2.1 Level AA,
            'best-practice', //Common accessibility best practices
          ],
        },
      },
    },
  },
};

export const decorators = [
  (Story) => {
    const solidRoot = document.createElement('div');

    render(Story, solidRoot);

    return solidRoot;
  },
];

export default preview;
