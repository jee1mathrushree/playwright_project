import { LocatorType } from './types/types';
export const googlepage_locator: LocatorType = {
  searchbox: "//*[@name='q']",
  searchlink: (text: string[]) => `//a[contains(.,'${text[0]}')]`,
};
