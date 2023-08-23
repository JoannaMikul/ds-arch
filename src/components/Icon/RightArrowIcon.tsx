import { mergeProps } from 'solid-js';

import { iconColor } from 'src/styles';
import { IconVariantProps, IconsProps } from './index.type';

export const RightArrowIcon = (props: IconsProps) => {
  const merged = mergeProps({ variant: 'primary' as IconVariantProps }, props);

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id={`right-arrow-icon-${merged.variant}`}>
        <path d="M25 14L3 14" stroke={iconColor[merged.variant]} stroke-width="4" stroke-linecap="round" />
        <path d="M25 14L18 7" stroke={iconColor[merged.variant]} stroke-width="4" stroke-linecap="round" />
        <path d="M25 14L18 21" stroke={iconColor[merged.variant]} stroke-width="4" stroke-linecap="round" />
      </g>
    </svg>
  );
};
