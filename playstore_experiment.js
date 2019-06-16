'use strict';

const wdio = require("webdriverio");

const options = {
    port: 4723,
    desiredCapabilities: {
        deviceName: "Albert Samsung",
        udid: '3300a8206a11c4c5',
        platformName: "Android",
        platformVersion: "7.0",
        appPackage: 'com.android.vending',
        appActivity: '.AssetBrowserActivity'
    }
};

const client = wdio.remote(options);

(async function () {
    console.log('Launching Play Store');
    const element = await client.init().element('android=new UiSelector().resourceId("com.android.vending:id/search_box_idle_text")');

    console.log('element: ', element);

    const isAppInstalled = await client.isAppInstalled('com.android.vending');
    console.log('Is the app installed? ', isAppInstalled);
})();