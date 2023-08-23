import type { Meta, StoryObj } from 'storybook-solidjs';
import { Decorator } from 'storybook-solidjs';
import { JSX, createSignal } from 'solid-js';

import { ThemeProvider } from '../../styles';
import { Input } from './Input';
import { disableProps } from 'src/helpers/storiesHelpers';

const withThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

/** Input allows users to enter text into the user interface. */
const meta = {
  component: Input,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    disabled: false,
    errorMessage: '',
    id: 'basic-input',
    label: 'Label',
    name: 'label',
    placeholder: 'Placeholder',
    type: 'text',
    variant: 'labelLeft',
    validation: 'withoutError',
    defaultValue: 'Default value',
  },
  argTypes: {
    'aria-label': {
      description: 'The aria-label attribute can be used to identify form controls.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    defaultValue: {
      description: 'Optionally provide the default value of the `<input>`.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    disabled: {
      description: 'Specify whether the `<input>` should be disabled.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    errorMessage: {
      description: 'The error message text content.',
      table: {
        type: {
          summary: 'JSXElement',
        },
      },
    },
    id: {
      description: 'The `id` of the input element.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: {
        name: 'string',
        required: true,
      },
    },
    label: {
      description: 'The label content.',
      table: {
        type: {
          summary: 'JSXElement',
        },
      },
    },
    min: {
      description: 'The `min` attribute specifies the minimum value for an `<input>` element.',
      table: {
        category: 'Number input',
        type: {
          summary: 'string | number',
        },
      },
      control: { type: 'text' },
    },
    max: {
      description: 'The `max` attribute specifies the maximum value for an `<input>` element.',
      table: {
        category: 'Number input',
        type: {
          summary: 'string | number',
        },
      },
      control: { type: 'text' },
    },
    name: {
      description: 'Name attribute of the input element.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: {
        name: 'string',
        required: true,
      },
    },
    onInput: {
      description: 'Optionally provide an `onInput` handler that is called whenever `<input>` is updated.',
      table: {
        type: {
          summary: 'JSX.EventHandler<HTMLInputElement, InputEvent>',
        },
      },
    },
    placeholder: {
      description: 'Specify the placeholder attribute for the `<input>`.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    step: {
      description: 'The `step` attribute specifies the interval between legal numbers in an `<input>` element.',
      table: {
        category: 'Number input',
        type: {
          summary: 'string | number',
        },
      },
      control: { type: 'text' },
    },
    type: {
      description: 'Specify the type of the `<input>`.',
      options: ['number', 'text', 'password', 'email', 'search'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'text' },
        type: {
          summary: 'number | text | password | email | search',
        },
      },
    },
    value: {
      description: 'Specify the value of the `<input>`.',
      table: {
        type: {
          summary: 'string | number | undefined',
        },
      },
    },
    validation: {
      options: ['withoutError', 'withError'],
      control: { type: 'radio' },
      description: 'If `withError` the input will indicate an error.',
      table: {
        defaultValue: { summary: 'withoutError' },
        type: {
          summary: 'withoutError | withError',
        },
      },
    },
    variant: {
      options: ['labelLeft', 'labelAbove'],
      control: { type: 'radio' },
      description: 'Variant of the location of the label relative to the input.',
      table: {
        defaultValue: { summary: 'labelLeft' },
        type: {
          summary: 'labelLeft | labelAbove',
        },
      },
    },
  },
};

/** You can use onInput or value props to control the behavior of the input. */
export const Controlled: Story = {
  args: {
    id: 'controlled-input',
    name: 'controlled',
    label: 'Label',
  },

  render: (args) => {
    const [value, setValue] = createSignal('');
    const handleOnInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
      setValue(event.currentTarget.value);
    };

    return <Input {...args} id={args.id} name={args.name} label={args.label} onInput={handleOnInput} value={value()} />;
  },
};

/** Use `disabled` property if you want to show disabled status. */
export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    name: 'disabled',
    label: 'Label',
    disabled: true,
    value: 'Value',
    variant: 'labelLeft',
  },
  argTypes: {
    variant: {
      options: ['labelLeft', 'labelAbove'],
      control: { type: 'radio' },
    },
  },
};

/** There are two variants of the Input: "labelLeft" or "labelAbove".*/
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', 'flex-direction': 'column', gap: '20px' }}>
      <Input id="variant-label-left" name="labelLeft" label="labelLeft" variant="labelLeft" />
      <Input id="variant-label-above" name="labelAbove" label="labelAbove" variant="labelAbove" />
    </div>
  ),
};

/** Use `validation` with "withError" value if you want to represent error status. The `errorMessage` prop can then be used to provide feedback to the user about the error. */
export const Validation: Story = {
  args: {
    id: 'validation-input',
    name: 'error',
    label: 'Label',
    errorMessage: 'Error message',
    validation: 'withError',
    placeholder: 'Placeholder',
  },
  argTypes: {
    validation: {
      options: ['withoutError', 'withError'],
      control: { type: 'radio' },
    },
  },
};

/** Input elements of type <b>number</b> are used to let the user enter a number. */
export const NumberInput: Story = {
  args: {
    name: 'number-input',
    label: 'Number',
    type: 'number',
    min: 0,
    max: 100,
    step: 1,
    id: 'number-input',
  },
  argTypes: {
    ...disableProps(['type']),
  },
};
