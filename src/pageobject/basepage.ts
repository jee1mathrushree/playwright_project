import { Page } from '@playwright/test';

export class basePage {
  constructor(public page: Page) {}
  public async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }
}
