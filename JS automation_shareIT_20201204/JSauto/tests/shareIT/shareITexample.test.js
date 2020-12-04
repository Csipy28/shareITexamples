
describe('Valid Login', () => {
    it('Open URL', () =>{
        browser.url('http://zero.webappsecurity.com/index.html')})
    it('Please do the login', () => {   
        const button = $('#signin_button')
        button.waitForExist()
        $('#signin_button').click()
            driver.pause(3000)
        $('#login_form').waitForExist()
            driver.pause(3000)
        $('#user_login').setValue('username')
            driver.pause(3000)
        $('#user_password').setValue('password')
            driver.pause(3000)
        $('input[type="submit"]').click()
            driver.pause(3000)
        $('.nav-tabs').waitForExist()
            driver.pause(3000)

    })
})
