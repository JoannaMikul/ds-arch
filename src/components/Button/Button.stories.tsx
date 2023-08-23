import type { Meta, StoryObj } from 'storybook-solidjs';
import { Decorator } from 'storybook-solidjs';

import { ThemeProvider } from '../../styles';
import { Button } from './Button';
import { keysIcons, iconControl } from '../../helpers/storiesHelpers';

const withThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

/** Buttons communicate actions that users can take. */
const meta = {
  component: Button,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    id: 'example-button',
    label: 'Label',
    size: 'medium',
    onClick: () => alert('You have triggered the onClick event'),
    disabled: false,
  },
  argTypes: {
    'aria-label': {
      description: 'The aria-label attribute to define the accessible name of an element.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
      description: 'If `true`, component will be in disabled state.',
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
    },
    iconAfter: {
      ...iconControl,
      description: 'Type of icon placed after the label.',
      table: {
        type: {
          summary: keysIcons,
        },
      },
    },
    iconBefore: {
      ...iconControl,
      description: 'Type of icon placed before the label.',
      table: {
        type: {
          summary: keysIcons,
        },
      },
    },
    id: {
      description: 'An optional string prop to provide an id to the component.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      description: 'Label of the button. If no <b>label</b> is set, <b>aria-label</b> property must be set.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onClick: {
      description: 'Specify a callback triggered on click.',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Size of the component.',
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: 'small | medium | large',
        },
      },
    },
  },
};

/** Use the `size` property if you want to define a size other than <b>medium</b>. The default button size is medium.*/
export const SizeVariants: Story = {
  args: {
    label: 'label',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} size="large" id="large-button" />
      <Button {...args} size="medium" id="medium-button" />
      <Button {...args} size="small" id="small-button" />
    </div>
  ),
};

/** Icon buttons allow users to take actions, and make choices, with a single tap. If only the icon is displayed in the button, you should define properties such as: `iconBefore` and `aria-label`.*/
export const IconButton: Story = {
  args: {
    iconBefore: 'plus',
    'aria-label': 'plus icon button',
  },
};

/** Define `disabled` props as <b>true</b> for the disabled state. A disabled button is unusable and un-clickable. */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
