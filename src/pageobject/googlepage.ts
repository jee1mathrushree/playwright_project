import { basePage } from './basepage';
import {googlepage_locator as locator} from '../pageobject/locators/googlepage_locator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Page, expect } from '@playwright/test';
class googlePage extends basePage {
  constructor(public page: Page) {
    super(page);
  }
  async Search(text: string) {
    await this.page.locator(locator.searchbox).fill(text);
    await this.page.keyboard.press('Enter');
  }

  async VerifySearchResult(text: string) {
    await this.page.waitForSelector(locator.searchvalue(text));
    const result = await this.page.locator(locator.searchvalue(text)).innerText();
    await expect(result).toContain(text);
  }
}
export const googlepage = (page: Page) => new googlePage(page);
