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
   localhots:3000/api-docs
   ```
   > This is the route for the api docs

# Extra: AWS Deploy

