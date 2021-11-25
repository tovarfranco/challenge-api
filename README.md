# Challenge API
API that exposes product details

## Requirements

<div>
    <ul>
        <li> NodeJs
        <li> Git
        <li> Express
        <li> Mocha-Chai
        <li> Swagger
    <ul>
</div>

## Set up environment

1. Clone the Repository
   ```bash
   git clone https://github.com/tovarfranco/challenge-api.git
   ```
   > Note: You can obtain the url from Code option in github.


## Run with npm

1. Open a terminal in the main directory and install the node modules packages:
   ```bash
   npm install
   ```
   > Note: All the necessary node modules will be installed.
2. Once installed the packages, we can go live:
   ```bash
   npm start
   ```
   > Note: the api service will be running in the specified port.

## Run with single Command

1. Open a terminal in the main directory and run the infra:
   ```bash
   ./start.sh
   ```
   > Note: All the necessary node modules will be installed and the service go live

## Test

1. Once installed the modules, open a terminal in the main directory and run the with:
   ```bash
   npm test
   ```
   > Note: All the test cases will be executed
2. If you want to install the modules and run the tests:
   ```bash
   ./test.sh
   ```
   > Note: All the necessary node modules will be installed and the service go live


## API Documentation - SWAGGER

1. Once the api is live, we can check its documentation developed with Swagger. 
   There we can test the endpoint with and without query string parameters.
   ```bash
   Endpoint: https://localhost:3000/api-docs
   ```
   > This is the route for the api docs

## Extra: AWS Deploy

### CI/CD Pipeline

<p> The CI/CD pipeline is conformed of the following tools: </p>

<div>
    <ul>
        <li> Github
        <li> CodeBuild AWS
        <li> ElasticBeanstalk
    <ul>
</div>

<p> Once the changes are made to the repository, in order to execute the pipeline a PULL REQUEST should be generated to merge into dev branch. Once the merge is approved and executed, a codeBuild pipeline will be triggered, which will deploy the code from dev branch </p>


<p> <img src="images/aws.jpeg" width="1000" align = "left"> </p>


### Environments

<div>
    <ul>
        <li> DEV  -> Branch DEV  -> URL: http://nodedev-env.eba-mj3pkgim.us-west-2.elasticbeanstalk.com/products
        <li> PROD -> Branch MAIN -> URL: http://nodedev-env.eba-mj3pkgim.us-west-2.elasticbeanstalk.com/products
    <ul>
</div>