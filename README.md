# Chrome Extension to fill Ocado cart

Ocado's internal API uses the `/webshop/addToBasket.do` endpoint to add items to the trolley.

This endpoint guards against [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery). This means that a web application served from a domain other than Ocado's won't be able to use it.

We must thusly resort to a browser extension. This makes for a worst developer and user experience in every way except for an important one: they won't need need to share their Ocado credentials with you.

## Loading the extension

![](http://drop.whoisjuliosantos.com/mbbclO+)

Visit [chrome://extensions](chrome://extensions), tick "Developer mode", and click "Load unpacked". Find the folder with these three files and proceed. You may need to click the toggle on the bottom right corner for it to show up next your URL bar.

![](http://drop.whoisjuliosantos.com/dV7VOB+)

## Flow example and further development

1. Users will need to have the application installed. For development, loading the extension as above will work. For production, you'll want to [publish your extension in the Chrome Web Store](https://developer.chrome.com/webstore/publish) so that non-developers can easily use it.
1. Make sure your application is [able to communicate with the extension](https://developer.chrome.com/extensions/messaging#external-webpage).
1. On your application, after the user is done with their selection, pass a message to the extension with a list of SKUs and amounts.
1. Guide the user to navigate to the Ocado website, authenticate if logged out, and click the button in the extension. Then, react to the user's click by iterating over the list and call `fetch` for each item.
