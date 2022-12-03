const { Given, When, Then } = require('@wdio/cucumber-framework');
const homepageUrl = "https://www.newegg.com/";
const searchTextbox = "input[type=search]";
const searchLoopButton ="div.header2021-search-button"

Given("I'm on the newEgg home page", async () => {
    await browser.url(homepageUrl);
});

When("Entry the word {string} in the search bar", async (value) => {
    const elem = await $(searchTextbox);
    await expect(elem).toBeExisting();
    elem.setValue(value);
    
});

When("Click the search", async () => {
    const elem = await $(searchLoopButton);
    await expect(elem).toBeExisting();
    elem.click();
});

Then("Check that at least one item appears", async () => {
    const elem = await $('*[class=item-cell]');
    await expect(elem).toBeExisting(); 
});

When("Open {string} tab", async (value) => {
    let selector = "//span[text()=" + '"' + value + '"]';
    const elem = await $(selector)
    await expect(elem).toBeExisting();
    elem.click();
});

When("Click on the Internet shop logo", async () => {
    const elem = await $('div[class=header2021-logo]');;
    await expect(elem).toBeExisting();
    elem.click();
});

Then("Check that the main page opened", async () => {
    await expect(browser).toHaveUrl(homepageUrl);
});