TwilioCallConnector
===================

A chrome extension that will connect you to your conference call, then call you. I'm using the trial version of Twilio, so it's free (although there's a small nag message when the call starts).

![ScreenShot](https://raw.github.com/ClaudeSutterlin/TwilioCallConnector/master/ss1.PNG)

Firstly, you'll need to create an account at Twilio.com, they will provide you three bits of important information that you'll need: AccountSid, AuthToken, and your Phone Number. Once you have these, go ahead and modify connector.php with these values. Additionally, you'll need to know where you're installing the PHP scripts and enter that in the connector.php file (ex. http://www.claudesutterlin.com/twilio/) .

![ScreenShot](https://raw.github.com/ClaudeSutterlin/TwilioCallConnector/master/ss2.PNG)

Next, go ahead and copy the files over to the web server.

Now, install the chrome extension manually. 

![ScreenShot](https://raw.github.com/ClaudeSutterlin/TwilioCallConnector/master/ss3.PNG)

-Copied from http://developer.chrome.com/extensions/getstarted.html

Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox: The menu's icon is three horizontal bars.. and select Extensions under the Tools menu to get to the same place).

Ensure that the Developer mode checkbox in the top right-hand corner is checked.

Click Load unpacked extension… to pop up a file-selection dialog.

Navigate to the directory in which your extension files live, and select it.

Access the extension, enter all fields and start the call.

![ScreenShot](https://raw.github.com/ClaudeSutterlin/TwilioCallConnector/master/ss1.PNG)