import { JSX } from 'solid-js';

import { IconsByType } from './Icon';

type IconComponent = (props: IconsProps) => JSX.Element;

export interface IconsByTypeProps {
  minus: IconComponent;
  plus: IconComponent;
  rightArrow: IconComponent;
  triangleDown: IconComponent;
  triangleUp: IconComponent;
}

export type IconVariantProps = 'primary' | 'secondary';

export interface IconsProps {
  /** Icon variant. Changing the variant affects the display of the icon color. */
  variant?: IconVariantProps;
  /** Type of the Icon. */
  type: keyof typeof IconsByType;
}
