Getting Started:

This guide is regarding set up for protector automation framework:

npm install -g protractor

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update

Now start up a server with::

webdriver-manager update --proxy="http://internetpu:8085" --ignore_ssl 

webdriver-manager start





