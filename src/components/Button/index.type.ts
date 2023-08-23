import { IconsByType } from '../Icon/Icon';

export type SizeProps = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /** The aria-label attribute to define the accessible name of an element. */
  'aria-label'?: string;
  /** If `true`, component will be in disabled state. */
  disabled?: boolean;
  /** Type of icon placed after the label. */
  iconAfter?: keyof typeof IconsByType;
  /** Type of icon placed before the label. */
  iconBefore?: keyof typeof IconsByType;
  /** An optional string prop to provide an id to the component. */
  id?: string;
  /** Label of the button. */
  label?: string;
  /** Specify a callback triggered on click. */
  onClick?: () => void;
  /** Size of the component. */
  size?: SizeProps;
}
