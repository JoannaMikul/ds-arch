export interface SelectOption {
  /** Label of the option. */
  label: string;
  /** Value of the option. */
  value: string | number;
}

export type VariantType = 'collapsed' | 'expanded';

export interface SelectProps {
  /** Options available to select from the list. */
  items: SelectOption[];
  /** The value of the select component. */
  value?: SelectOption;
  /** Callback fired when an option is selected. */
  onChange?: (value: SelectOption | undefined) => void;
  /** Specify the placeholder attribute for the select component. */
  placeholder?: string;
  /** The property responsible for the visibility of the option. Available values are: `collapsed` or `expanded`. */
  variant?: VariantType;
}
