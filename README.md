## Car API Testing

## Overview
The following repo contains restful API Testing using rest-assured and cucumber BDD framework.

## Proect Set Up
1. Clone this repository "https://github.com/traps12/car-types-api-testing.git".
2. BASE_URL and WA_KEY are private so please provide valid values for BASE_URL and WA_KEY.
   in the configuration file "src/test/resources/config.properties".
3. Build this project using maven command "mvn clean install" OR maven build from editor.


## Project Structure
1. feature directory "src\test\java\feature" contains all test scenarios for APIs in BBD style.
2. steDefinition directory "src\test\java\steDefinition" contains implementations of feature.
3. common "src\test\java\common" includes all common supporting library and constants
4. runner directory "src\test\java\runner" contains TestRunner class, It is root file where we run feature file
5. resources directory "src\test\java\resources" includes property file and Json schema to validate Json response.
6. pom.xml for all dependency

## How To Run
There are two ways 
- Run TestRunner at "src\test\java\runner" by using editor 
    OR
- Run command "mvn test" OR mvn "clean install"

## Reporting
- For reporting I have used 'maven-cucumber-reporting' plugin, which generates report in tabular and graphs format,
  and also shows details when we click on any feature link.
- To generate the report please to run the maven command "mvn clean install"
- Report will be generate under the project folder at "target/cucumber-html-reports/overview-features.html"

