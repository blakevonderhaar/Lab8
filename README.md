# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? Answer: 1 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. Answer: I would try to test the message feature but unit testing seems to not be able to test this feature as well as some other methods of testing.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. Answer: Yes I would use a unit test to test the max message length because this is a straigforward test that is able to be tested on a small scale. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true? Answer: If we run puppeteer with headless then it will run without needing a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    pushToHistory('settings', 0);
    await page.waitForTimeout(500);
  });

