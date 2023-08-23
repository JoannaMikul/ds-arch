import { JSX, JSXElement } from 'solid-js';

export type ValidationType = 'withError' | 'withoutError';
export type VariantType = 'labelLeft' | 'labelAbove';

export interface InputProps {
  /** The aria-label attribute can be used to identify form controls. */
  'aria-label'?: string;
  /** Optionally provide the default value of the `<input>`.*/
  defaultValue?: string | number;
  /** Specify whether the `<input>` should be disabled. */
  disabled?: boolean;
  /** The error message text content. */
  errorMessage?: JSXElement;
  /** The `id` of the input element. */
  id: string;
  /** The label content. */
  label?: JSXElement;
  /** The min attribute specifies the minimum value for an `<input>` element. */
  min?: string | number;
  /** The max attribute specifies the maximum value for an `<input>` element. */
  max?: string | number;
  /** Name attribute of the input element. */
  name: string;
  /** Optionally provide an `onInput` handler that is called whenever `<input>` is updated. */
  onInput?: JSX.EventHandler<HTMLInputElement, InputEvent>;
  /** Specify the placeholder attribute for the `<input>`. */
  placeholder?: string;
  /** The step attribute specifies the interval between legal numbers in an `<input>` element. */
  step?: string | number;
  /** Specify the type of the `<input>`. */
  type?: 'number' | 'text' | 'password' | 'email' | 'search';
  /** Specify the value of the `<input>`. */
  value?: string | number | undefined;
  /** If `withError` the input will indicate an error. */
  validation?: ValidationType;
  /** Variant of the location of the label relative to the input. */
  variant?: VariantType;
}
