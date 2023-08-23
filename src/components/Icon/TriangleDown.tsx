import { mergeProps } from 'solid-js';

import { iconColor } from 'src/styles';
import { IconVariantProps, IconsProps } from './index.type';

export const TriangleDownIcon = (props: IconsProps) => {
  const merged = mergeProps({ variant: 'primary' as IconVariantProps }, props);

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={`triangle-down-icon-${merged.variant}`}
    >
      <path
        d="M14.7924 19.9706C14.3921 20.4906 13.6079 20.4906 13.2076 19.9706L6.57912 11.36C6.07292 10.7024 6.54169 9.75 7.37153 9.75L20.6285 9.75C21.4583 9.75 21.9271 10.7024 21.4209 11.36L14.7924 19.9706Z"
        fill={iconColor[merged.variant]}
      />
    </svg>
  );
};
