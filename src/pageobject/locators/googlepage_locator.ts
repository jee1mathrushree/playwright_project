export const googlepage_locator= {
  searchbox: "//*[@name='q']",
  searchvalue: (text: string) => `//a[contains(.,'${text}')]`,
};
