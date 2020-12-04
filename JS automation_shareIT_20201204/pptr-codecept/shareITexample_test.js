Feature('Valid Login');

Scenario('Open URL', ({ I }) => {
    I.amOnPage('http://zero.webappsecurity.com/index.html')
    I.wait(3)
});

Scenario('Please do the login', ({ I }) => {
    I.click('#signin_button')
    I.wait(3)
    I.seeElement('#login_form')
    I.fillField('#user_login', 'username')
    I.fillField('#user_password', 'password')
    I.click('input[type="submit"]')
    I.seeElement('.nav-tabs')
    I.wait(3)
});
