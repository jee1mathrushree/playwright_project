import { googlepage_locator } from './googlepage_locator';
import { LocatorType } from './types/types';

export const locators: LocatorType = {
  ...googlepage_locator,
};

export function getAttr(e: keyof typeof locators, ...a: string[]) {
  const res = locators[e];
  if (typeof res === 'string') {
    return res as string;
  } else {
    return (res as (s: string[]) => string)(a);
  }
}
