import { mergeProps } from 'solid-js';
import { styled } from 'solid-styled-components';

import { InputProps, ValidationType, VariantType } from './index.type';

const Label = styled.label<{ 'aria-disabled'?: boolean }>`
  font: ${({ theme }) => theme?.typography.medium.font};
  color: ${({ theme, 'aria-disabled': ariaDisabled }) =>
    ariaDisabled ? theme?.colors.neutralMedium : theme?.colors.neutralDark};
  text-align: right;
`;

const StyledInput = styled.input<Pick<InputProps, 'validation'>>`
  border-radius: 5px;
  border: 1px solid
    ${({ theme, validation }) => (validation === 'withError' ? theme?.colors.error : theme?.colors.neutralDark)};
  background-color: ${({ theme }) => theme?.colors.common.white};
  height: 50px;
  width: 300px;
  padding: 11px 11px 12px;
  font: ${({ theme }) => theme?.typography.medium.font};

  &::placeholder {
    color: ${({ theme }) => theme?.colors.neutralMedium};
  }

  &:hover {
    border-width: 2px;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    border-width: 1px;
    box-shadow: 0px 0px 3px 2px ${({ theme }) => theme?.colors.primary};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme?.colors.neutralMedium};
    background-color: transparent;
    color: ${({ theme }) => theme?.colors.neutralMedium};
  }
`;

const InputWrapper = styled.div<Pick<InputProps, 'variant'>>`
  display: flex;
  flex-direction: ${({ variant }) => (variant && variant === 'labelAbove' ? 'column' : 'row')};
  align-items: ${({ variant }) => (variant && variant === 'labelAbove' ? 'flex-start' : 'baseline')};
  gap: ${({ variant }) => (variant && variant === 'labelAbove' ? '8px' : '10px')};
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme?.colors.error};
  font: ${({ theme }) => theme?.typography.extraSmall.font};
  margin-top: 8px;
`;

const InputWithError = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = (props: InputProps) => {
  const merged = mergeProps(
    { validation: 'withoutError' as ValidationType, type: 'text', variant: 'labelLeft' as VariantType },
    props
  );

  return (
    <InputWrapper variant={merged.variant}>
      {merged.label && (
        <Label for={merged.id} aria-disabled={merged.disabled}>
          {merged.label}
        </Label>
      )}
      <InputWithError>
        <StyledInput
          aria-label={merged['aria-label']}
          disabled={merged.disabled}
          id={merged.id}
          type={merged.type}
          name={merged.name}
          min={merged.type === 'number' ? merged.min : undefined}
          max={merged.type === 'number' ? merged.max : undefined}
          onInput={merged.onInput}
          step={merged.type === 'number' ? merged.step : undefined}
          placeholder={merged.placeholder}
          validation={merged.validation}
          value={merged.defaultValue || merged.value}
        />
        {!merged.disabled && merged.errorMessage && merged.validation === 'withError' && (
          <ErrorMessage>{merged.errorMessage}</ErrorMessage>
        )}
      </InputWithError>
    </InputWrapper>
  );
};
