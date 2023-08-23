import type { Meta, StoryObj } from 'storybook-solidjs';
import { Decorator } from 'storybook-solidjs';

import { ThemeProvider } from '../../styles';
import { Icon } from './Icon';
import { iconControl, keysIcons } from '../../helpers/storiesHelpers';

const withThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

const meta = {
  component: Icon,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Icon is used as a visual representation of common actions and commands to provide additional context and enhance usability. */
export const Example: Story = {
  args: {
    variant: 'primary',
    type: 'plus',
  },
  argTypes: {
    type: {
      ...iconControl,
      description: 'Type of the Icon.',
      table: {
        type: {
          summary: keysIcons,
        },
      },
    },
    variant: {
      description: 'Icon variant. Changing the variant affects the display of the icon color.',
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'primary | secondary',
        },
      },
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};
