import { basePage } from './basepage';
import { locators, getAttr } from './locators/allElements';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Page, expect } from '@playwright/test';
class googlePage extends basePage {
  constructor(public page: Page) {
    super(page);
  }
  async Search(text: string, elementName: keyof typeof locators) {
    let json;
    await this.page!.route(`*/**/complete/search?q=*`, async (route) => {
      json = [[['vinod\u003cb\u003e cookware\u003c/b\u003e', 0, [71, 598, 432]]]];
      await route.fulfill({ json });
    });
    await this.page.locator(locators[elementName] as string).fill(text);
    const xpath = `//span[contains(text(),'vinod')]`;
    await expect(this.page!.waitForSelector(xpath, { timeout: 5000 })).resolves.not.toThrow();
    await this.page.keyboard.press('Enter');
  }

  async VerifySearchResult(text: string, elementName: keyof typeof locators) {
    // eslint-disable-next-line no-console
    console.log('locators[elementName]', elementName);
    const locatorString = getAttr(elementName, text);
    await this.page.waitForSelector(locatorString);
    const result = await this.page.locator(locatorString).innerText();
    return result;
  }
}
export const googlepage = (page: Page) => new googlePage(page);
