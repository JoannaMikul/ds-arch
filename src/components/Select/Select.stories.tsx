import type { Meta, StoryObj } from 'storybook-solidjs';
import { Decorator } from 'storybook-solidjs';
import { createSignal } from 'solid-js';

import { ThemeProvider } from '../../styles';
import { Select } from './Select';
import { SelectOption } from './index.type';

const withThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

const items: SelectOption[] = [
  {
    label: 'First item',
    value: 1,
  },
  {
    label: 'Second item',
    value: 2,
  },
  {
    label: 'Third item',
    value: 3,
  },
  {
    label: 'Fourth item',
    value: 4,
  },
  {
    label: 'Fifth item',
    value: 5,
  },
];

/** Input allows users to enter text into the user interface. */
const meta = {
  component: Select,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    items,
    placeholder: 'Placeholder',
    variant: 'collapsed',
  },
  argTypes: {
    items: {
      type: {
        name: 'other',
        required: true,
        value: '',
      },
      control: 'object',
      description: 'Options available to select from the list.',
      table: {
        type: {
          summary: '[{label: string, value: string | number}]',
        },
      },
    },
    value: {
      description: 'The value of the select component.',
      table: {
        type: {
          summary: '{label: string, value: string | number}',
        },
      },
    },
    onChange: {
      description: 'Callback fired when an option is selected.',
      table: {
        summary: '(value: SelectOption | undefined) => void',
      },
    },
    placeholder: {
      description: 'Specify the placeholder attribute for the select component',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      description: 'The property responsible for the visibility of the option.',
      table: {
        type: {
          summary: 'collapsed | expanded',
        },
        defaultValue: { summary: 'collapsed' },
      },
      options: ['collapsed', 'expanded'],
      control: { type: 'select' },
    },
  },

  render: (args) => {
    const [value, setValue] = createSignal(undefined);

    return (
      <Select
        {...args}
        items={args.items}
        value={value()}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => {
          setValue(e);
        }}
        variant={args.variant}
      />
    );
  },
};
