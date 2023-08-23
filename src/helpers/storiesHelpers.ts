import { IconsByType } from 'src/components/Icon/Icon';

const orderedIcons = Object.keys(IconsByType)
  .sort()
  .reduce((acc, key) => ({ ...acc, [key]: key }), {});

export const iconControl = { options: { null: '', ...orderedIcons }, control: { type: 'select' } };

export const keysIcons = Object.keys(IconsByType).join(' | ');

export const disableProps = (propNames: string[]) =>
  propNames.reduce(
    (all, current) => ({
      ...all,
      [current]: {
        table: { disable: true },
      },
    }),
    {}
  );
