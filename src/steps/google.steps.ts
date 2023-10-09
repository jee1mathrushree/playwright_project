import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { googlepage } from '../pageobject/googlepage';
import { RestRequest } from '../utils/apiwrapper';
import { locators } from '../pageobject/locators/allElements';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('Go to the google search website {string}', async function (this: ICustomWorld, url: string) {
  await googlepage(this.page!).goto(url);
});

When(
  'I type {string} in {string}',
  async function (this: ICustomWorld, text: string, elementName: keyof typeof locators) {
    await googlepage(this.page!).Search(text, elementName);
  },
);

When('user fetch userid of {string}', async function (this: ICustomWorld, text: string) {
  this.sharedData = await RestRequest(this.server!).getUserid(text);
});

Then('user should see id as {string}', async function (this: ICustomWorld, text: string) {
  await expect(this.sharedData.id).toEqual(+text);
});

Then(
  'I should see {string} for {string}',
  async function (this: ICustomWorld, searchLink: string, text: string) {
    const actualText = await googlepage(this.page!).VerifySearchResult(text, searchLink);
    await expect(actualText).toContain(text);
  },
);
