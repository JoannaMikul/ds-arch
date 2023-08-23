import { mergeProps } from 'solid-js';

import { iconColor } from 'src/styles';
import { IconVariantProps, IconsProps } from './index.type';

export const TriangleUpIcon = (props: IconsProps) => {
  const merged = mergeProps({ variant: 'primary' as IconVariantProps }, props);

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={`triangle-up-icon-${merged.variant}`}
    >
      <path
        d="M13.2076 8.02937C13.6079 7.50936 14.3921 7.50936 14.7924 8.02937L21.4209 16.64C21.9271 17.2976 21.4583 18.25 20.6285 18.25L7.37153 18.25C6.54169 18.25 6.07293 17.2976 6.57912 16.64L13.2076 8.02937Z"
        fill={iconColor[merged.variant]}
      />
    </svg>
  );
};
