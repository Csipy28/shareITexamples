const jestPuppeteerConfig = require("../jest-puppeteer.config")

describe("Valid login", () => {

    it("Open URL", async (done) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitFor(2000);
        done();
    },30000);

    it('Please do the login', async(done) => {   
        await page.waitFor('#signin_button')
        await page.click('#signin_button')
        await page.waitFor('#login_form')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('.btn-primary', {clickCount: 1})
        await page.waitFor('.nav-tabs')
        done();
    },80000);
})