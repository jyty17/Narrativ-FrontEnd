# Exercise prompt

1. Write a constructor function named Smartlink that is initialized with 2 parameters: a) An auction ID in string form; b) A DOM element. Assign this DOM elemen to Smartlink `element` attribute.

2. Write a function `validAuctionId()` that validates that the auction ID is a valid integer and returns a bool.
```
// Valid
'1235265680'
'97627'

// Invalid
'abcd'
'123abc'
```

3. Smartlink has a `runAction()` method that returns a promise that resolves with:
```Javascript
{
  data: {
    destination_url: 'http://merchant.example/product/1',
    merchant_name: 'Sephora',
    product_name: 'Highlighter brush',
    price: '15.89',
  }
}
```

4. Smartlink has a `rewriteLink(URL, linkText)` method, which takes two strings as params: a) URL; b) linkText. It updates the href and text of its element with these new values.

5. Write a Jstag constructor function. It has a function called `findAllSmartlinks()` that is called on initialization.

6. `findAllSmartlinks()` finds all the Smartlink elements on the page, which are anchor elements with hrefs in the form of `https://shop-links.co/123456789`, where `123456789` is the auction ID.
```Javascript
// Valid links
'https://shop-links.co/98776543210'
'//shop-links.co/9877654321'
'shop-links.co/9877654323'

// Invalid
'https://shop-links.co/123invalid'
'shop-links.us/98776543210'
```

7. For each Smartlink on the page, create an instance of the Smartlink object using the auction ID string and DOM element. Save them in an array called `smartlinks`.

8. Jstag has a method called `runAllSmartlinks()`. It loops through the smartlinks array and call `runAuction()` on each Smartlink. Then call `rewriteLink()` using the data returned by `runAuction()` to update the Smartlink element.
  - Smartlink href => destination URL
  - Smartlink text => "Product Name, $Price at Merchant Name".

9. Don't rewrite the Smartlink if the auction ID isn't valid. Verify that your code is working, "SMARTLINK 1" and "SMARTLINK 2" should be overwritten with "Highlighter brush, $15.89 at Sephora".

### Run instruction
- In this directory: `$ python -m SimpleHTTPServer`
- Open localhost:8000. Refresh page after updating code.
