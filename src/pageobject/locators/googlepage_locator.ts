export = {
  searchbox: "//*[@name='q']",
  searchvalue: (text: string) => `//a[contains(.,'${text}')]`,
};
