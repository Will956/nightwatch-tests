module.exports = {
  'Test Photobox.fr' : function (client) {
    // client
    //   .url('https://www.photobox.fr')
    //   .waitForElementVisible('body', 1000)
    //   .saveScreenshot('screenshots/home.png')
    //   .click('.signin')
    //   .pause(1000)
    //   .click('#pbx_signin_joinnow')
    //   .waitForElementVisible('body', 1000)
    //   .saveScreenshot('screenshots/register.png')
    //   .end();

    client
      .url('https://www.photobox.fr')
      .waitForElementVisible('body', 1000)
      .saveScreenshot('screenshots/home.png')
      .click('.signin')
      .pause(1000);

    client.click('#pbx_signin_joinnow', function(response) {
      console.log('go to register page');
      this.waitForElementVisible('body', 1000);
      this.assert.urlEquals('https://www.photobox.fr/inscription');
      this.assert.title('Devenez membre de notre site - PhotoBox');
      this.saveScreenshot('screenshots/register.png', function() {
        console.log('screenshot done');
      })
    });


    client.end();
  }
};