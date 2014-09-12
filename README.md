## xTuple Contacts Application

This is a web application that manages Contacts using the xTuple REST API.

React.js/Backbone.js scaffolding based on the
  [generator-react-app](https://github.com/js-experiments/generator-react-app) for Yeoman.

[![Build Status](https://travis-ci.org/lynnaloo/xtuple-contacts.svg)](https://travis-ci.org/lynnaloo/xtuple-contacts.svg)

## How to Get Started:

### Create new OAuth2 Client

Before you can use this client with xTuple's OAuth 2.0 Server,
you need to create a reference for a new OAuth 2.0 Client. Be sure to select a
"Client Type" of "Service Account" and ensure that "Delegated Access" is checked.
This will generate a private key and give you all the other information that you will
need to connect to the xTuple REST API.

### Set your Private Key

* Convert your key.p12 file to key.pem and copy it to the `keys` folder:

   `openssl pkcs12 -in keys/key.p12  -nocerts -nodes | openssl rsa -out keys/key.pem`

* Enter Import Password: 'notasecret'

### Setup Environment Variables

* Copy `sample.env` to a new file called `.env`

Open the .env file and change the information to match what was provided
by the xTuple OAuth 2.0 extension.


### Run this Application

* Clone this repository
* cd `xtuple-contacts`
* Install npm packages, bower packages, and run grunt tasks

```
npm install
```

* To start the application, run `npm start`

* Navigate to `http://localhost:3000` in your browser

### License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
