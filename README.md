# react_shop
Simple dashboard that consumes a small REST API to handle an order submition. Such dashboard can add more items to the order and display to the user quantities and subtotal, as well as the currency and components to edit the order before buying. 

### Instalation and setup

Make an initial

```sh
$ npm i
```
Inside the project folder. Then go to the
> $(PROYECT_FOLDER).../client

and run another
```sh
$ npm i
```

Once you installed all dependencies, you can run the project by:
```sh
$ npm run dev
```
from the root of the project. This will launch all processes needed to run the client concurrently. After this, a client listening on port 3000 should be running.

### Important to know

Given that this client uses and API that needs authorization headers, the token used to access the API was not commited to this repo as there was not certainty of its intented enviroment usage (dev or prod).

To run this project one must also create a `.env.development` file inside:

> $(PROYECT_FOLDER)/client

Once this file is created you must create your token id variable inside it by typing:

```sh
REACT_APP_API_TOKEN=your_api_acces_token_goes_here
```
this is essentialy creating a new enviroment variable that the project can read when running on development mode. Make sure to add no trailing commas or backticks or anything surrouding your token, just plain text after the '=' sign.

Also make sure not to change the name of the var `REACT_APP_API_TOKEN` as the api handler is expecting that exact variable name.

### Mongo troubleshooting

This project's server side uses an instance of Mongo Atlas to store the google_id gathered through the google Oauth flow. The cluster is already configured to allow any ip (0.0.0.0/0) to access the database. If you come across an issue refering to: `mongo client connection error` when running `npm run dev` get in contact so I can resolve the issue at once.

### Requirements and extras

This project was built as part of a code challenge that expected a client to consume the assigned API to handle and edit an existing order with a set of given items, quantities and prices.

In adition to the aforedmentioned behavior this client also displays:
* Login with google
* Landing page
* Modal component to output errors to user
* Input level validation inside form
* Alert when user submits an order

### License

## MIT




