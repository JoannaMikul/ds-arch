import { Switch, Match, mergeProps } from 'solid-js';

import { MinusIcon } from './MinusIcon';
import { PlusIcon } from './PlusIcon';
import { IconVariantProps, IconsByTypeProps, IconsProps } from './index.type';
import { RightArrowIcon } from './RightArrowIcon';
import { TriangleDownIcon } from './TriangleDown';
import { TriangleUpIcon } from './TriangleUp';

export const IconsByType: IconsByTypeProps = {
  minus: MinusIcon,
  plus: PlusIcon,
  rightArrow: RightArrowIcon,
  triangleDown: TriangleDownIcon,
  triangleUp: TriangleUpIcon,
};

export const Icon = (props: IconsProps) => {
  const merged = mergeProps({ variant: 'primary' as IconVariantProps }, props);

  return (
    <Switch>
      <Match when={merged.type === 'minus'}>
        <MinusIcon {...merged} variant={merged.variant} />
      </Match>
      <Match when={merged.type === 'plus'}>
        <PlusIcon {...merged} variant={merged.variant} />
      </Match>
      <Match when={merged.type === 'rightArrow'}>
        <RightArrowIcon {...merged} variant={merged.variant} />
      </Match>
      <Match when={merged.type === 'triangleDown'}>
        <TriangleDownIcon {...merged} variant={merged.variant} />
      </Match>
      <Match when={merged.type === 'triangleUp'}>
        <TriangleUpIcon {...merged} variant={merged.variant} />
      </Match>
    </Switch>
  );
};
