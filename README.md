# How to setup
## safaridriver
1. Set up your environment
    - Run `safaridriver --enable`
    - [Enable `Remote Automation`](https://webkit.org/blog/9395/webdriver-is-coming-to-safari-in-ios-13/) setting on your mobile device.
    - [Trust the host](https://support.apple.com/en-us/HT202778)
2. Start safaridriver
    - Run `safaridriver --port 4444`

## Test code
1. Prepare `npm` and `node`
    - In my case
        ```
        $ node -v
        > v12.9.1
        $ npm -v
        > 6.10.2
        ```
2. `npm install`

# Run test
- `npm run test` or ` npm run test --spec test/specs/ios/example_selenium_jp.spec.js`
