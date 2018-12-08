Getting Started:

This guide is regarding set up for protector automation framework:
Run below command

npm install

Now start up a server with::

webdriver-manager update --proxy="http://internetpu:8085" --ignore_ssl 

webdriver-manager start

To Run any test:

npm run test

To run test specific browser:

set TEST_BROWSER_NAME=chrome&npm run test


