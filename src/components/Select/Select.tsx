import { Index, createEffect, createSignal, onCleanup } from 'solid-js';
import { styled } from 'solid-styled-components';

import { Icon } from '../Icon';
import { opacityHexCodes } from 'src/styles';
import { SelectOption, SelectProps } from './index.type';

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 300px;
  min-height: 50px;
  border: 1px solid ${({ theme }) => theme?.colors.neutralMedium};
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 15px;
  border-radius: 5px;
  outline: none;
  background-color: ${({ theme }) => theme?.colors.common.white};
  cursor: pointer;

  &:focus {
    box-shadow: 0px 0px 3px 2px ${({ theme }) => theme?.colors.primary};
  }
`;

const Value = styled.span<{ label?: string }>`
  flex-grow: 1;
  font: ${({ theme }) => theme?.typography.medium.font};
  color: ${({ theme, label }) => (label ? theme?.colors.common.black : theme?.colors.neutralMedium)};
`;

const Options = styled.ul<{ show: boolean; inputHeight?: number }>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${({ show }) => (show ? 'block' : 'none')};
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  left: 0;
  top: ${({ inputHeight }) => (inputHeight ? `${inputHeight + 2}px` : 0)};
  box-shadow: 0px 0px 10px 0px ${({ theme }) => `${theme?.colors.common.black}${opacityHexCodes.opacity025}`};
`;

const Option = styled.li<{ highlighted: boolean; selected: boolean }>`
  padding: 11px 20px;
  cursor: pointer;
  background-color: ${({ highlighted, selected, theme }) =>
    highlighted ? theme?.colors.neutralLighter : selected ? theme?.colors.neutralLight : theme?.colors.common.white};
  color: ${({ theme }) => theme?.colors.neutralDark};
  font: ${({ theme }) => theme?.typography.medium.font};
`;

export const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [highlightedIndex, setHighlightedIndex] = createSignal(0);
  let containerRef: HTMLDivElement | undefined;
  const selectOption = (items: SelectOption) => {
    if (items === props.value) {
      props.onChange && props.onChange(undefined);
    } else props.onChange && props.onChange(items);
  };

  const isOptionSelected = (items: SelectOption) => {
    return items === props.value;
  };

  createEffect(() => {
    if (isOpen()) setHighlightedIndex(0);
  });

  const handler = (event: KeyboardEvent) => {
    if (event.target != containerRef) return;

    if (isOpen()) {
      if (event.code === 'Enter' || event.code === 'Space') {
        selectOption(props.items[highlightedIndex()]);
      }
    }
    switch (event.code) {
      case 'Enter':
      case 'Space':
        setIsOpen((prev) => !prev);

        break;

      case 'ArrowUp':
      case 'ArrowDown': {
        if (!isOpen()) {
          setIsOpen(true);
          break;
        }

        const newValue = highlightedIndex() + (event.code === 'ArrowDown' ? 1 : -1);

        if (newValue >= 0 && newValue < props.items.length) {
          setHighlightedIndex(newValue);
        }
        break;
      }

      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  createEffect(() => {
    if (props.variant === 'expanded') {
      setIsOpen(true);
    } else setIsOpen(false);
    containerRef?.addEventListener('keydown', handler);
  });

  onCleanup(() => containerRef?.removeEventListener('keydown', handler));

  return (
    <Container
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      ref={containerRef}
    >
      <Value label={props.value?.label}>{props.value?.label || props.placeholder}</Value>
      <Icon type={isOpen() ? 'triangleUp' : 'triangleDown'} />
      <Options show={isOpen()} inputHeight={containerRef?.offsetHeight}>
        <Index each={props.items}>
          {(items, index) => (
            <Option
              highlighted={index === highlightedIndex()}
              selected={isOptionSelected(items())}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(items());
                setIsOpen(false);
              }}
            >
              {items().label}
            </Option>
          )}
        </Index>
      </Options>
    </Container>
  );
};
