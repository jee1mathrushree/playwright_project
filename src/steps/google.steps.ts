import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { googlepage } from '../pageobject/googlepage';
import { Given, When, Then } from '@cucumber/cucumber';
Given('Go to the google search website {string}', async function (this: ICustomWorld, url: string) {
  await googlepage(this.page!).goto(url);
});

When('I seach {string}', async function (this: ICustomWorld, text: string) {
  await googlepage(this.page!).Search(text);
});

Then('I should see link for {string}', async function (this: ICustomWorld, text: string) {
  await googlepage(this.page!).VerifySearchResult(text);
});
