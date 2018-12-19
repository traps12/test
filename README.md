##Getting Started:

This guide is regarding set up for protector automation framework:
Run below command

```
$npm install
```

###Now start up a server with::

```
$webdriver-manager update --proxy='proxy' --ignore_ssl
$webdriver-manager start
```

##To Run any test on specific environment:

```
$npm run <test env>
```

###To run any test using browser stack:

###Run test on specific browser on localbrowser stack:

```
npm run localtest
```

###Run test on mutiple browser on localbrowser stack:

```
npm run paralleltest
```

##To run the test case in docker

###Create Docker Image
```
$docker build -t <your-imagename> .
```
### Else pull the docker image from docker hub

```
$docker pull weboaks/node-karma-protractor-chrome
```

### Command to start running the execution
```
docker run -it --privileged --rm --net=host --shm-size 2g -v $(pwd):/protractor -w /protractor weboaks/node-karma-protractor-chrome npm test
```
