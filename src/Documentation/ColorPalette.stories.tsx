import type { Meta, StoryObj } from 'storybook-solidjs';
import { Decorator } from 'storybook-solidjs';

import { ThemeProvider } from 'src/styles';
import { ColorPalette } from './ColorPalette';

const withThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

const meta = {
  component: ColorPalette,
  decorators: [withThemeDecorator],
  parameters: {
    a11y: { disable: true },
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
