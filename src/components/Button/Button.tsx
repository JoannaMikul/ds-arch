import { styled } from 'solid-styled-components';
import { mergeProps } from 'solid-js';

import { ButtonProps, SizeProps } from './index.type';
import { opacityHexCodes, typography } from 'src/styles';
import { Icon } from '../Icon/Icon';

const BUTTON_SIZES = {
  small: {
    height: '40px',
    padding: '10px 14px',
    gap: '14px',
    iconSize: '20px',
    fontSize: typography.small.fontSize,
  },
  medium: {
    height: '50px',
    padding: '11px 20px',
    gap: '22px',
    iconSize: '28px',
    fontSize: typography.medium.fontSize,
  },
  large: {
    height: '60px',
    padding: '11px 25px',
    gap: '25px',
    iconSize: '28px',
    fontSize: typography.large.fontSize,
  },
};

const StyledButton = styled.button<Pick<ButtonProps, 'size' | 'disabled'>>`
  display: inline-flex;
  height: ${({ size }) => size && `${BUTTON_SIZES[size].height}`};
  padding: ${({ size }) => size && `${BUTTON_SIZES[size].padding}`};
  align-items: center;
  flex-shrink: 0;
  gap: ${({ size }) => size && `${BUTTON_SIZES[size].gap}`};
  border-radius: 5px;
  border: 2px solid ${({ theme, disabled }) => (disabled ? theme?.colors.neutralLight : theme?.colors.primary)};
  background-color: ${({ theme, disabled }) => (disabled ? theme?.colors.neutralLight : theme?.colors.primary)};
  font-family: ${({ theme }) => theme?.typography.fontFamily};
  font-family: ${({ theme }) => theme?.typography.fontWeight};
  font-size: ${({ size }) => size && `${BUTTON_SIZES[size].fontSize}`};
  color: ${({ theme }) => theme?.colors.common.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'all' : 'auto')};

  &:focus {
    border-color: ${({ theme }) => theme?.colors.primaryDark};
    background-color: ${({ theme }) => theme?.colors.primary};
    box-shadow: 0px 1px 5px 0px ${({ theme }) => `${theme?.colors.neutralDark}${opacityHexCodes.opacity050}`};
  }

  &:hover {
    border-color: ${({ theme, disabled }) => (disabled ? theme?.colors.neutralLight : theme?.colors.primaryDark)};
    background-color: ${({ theme, disabled }) => (disabled ? theme?.colors.neutralLight : theme?.colors.primaryDark)};
  }

  svg {
    width: ${({ size }) => size && `${BUTTON_SIZES[size].iconSize}`};
    height: ${({ size }) => size && `${BUTTON_SIZES[size].iconSize}`};
  }
`;

export const Button = (props: ButtonProps) => {
  const merged = mergeProps({ size: 'medium' as SizeProps }, props);

  return (
    <StyledButton
      aria-label={merged['aria-label']}
      disabled={merged.disabled}
      id={merged.id}
      onClick={merged.onClick}
      size={merged.size}
    >
      {merged.iconBefore && <Icon type={merged.iconBefore} variant="secondary" />}
      {merged.label}
      {merged.iconAfter && <Icon type={merged.iconAfter} variant="secondary" />}
    </StyledButton>
  );
};
