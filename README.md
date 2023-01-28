# Node.js CRUD API

This is just a minimalist API on which I implemented the CRUD on course management.

## Features
With this API you will be able to:
- Create a course
- Read one or more courses
- Update a course
- Delete a course

## Project setup

1. Install `nodejs` if you don't have it installed.
If you are not sure, check it in the `terminal`, by typing type `$ node -v` or `$ npm -v`.

2. Clone the project from the terminal (type `$ git clone https://github.com/Domeshow/Nodejs-CRUD-API`) or you can download a ZIP file
3. Open the main directory of the project then type in the `terminal` the command below:
```
npm install 
```
This should install all the dependancies of the project.
## Database setup

1. Go to [Mongodb Platform](https://cloud.mongodb.com) and create a new cluster (create first an account if you don't have it). Note that you can use a local database using MongoDB Compass
2. Copy your connection string (You will use it to connect to your database).
4. Create a `.env` on the root of the project following the `.env-example` file and put required informations there

    ```bash
    # The port you want to use. By default is se to '3800' ...
    "PORT": "root", 
    
    # The connection string of your database. By default it is set to ''(empty)
    "DB_URL": "The connection string you copied"
    ```

## Run the server

1. Go back again in the `terminal` and type the command below to run the `API Server`

```
npm start
```

2. Then open an `API tester application` (for exemple `Postman`) and test.
    
    Note: the base url for testing `Endpoints` is `http://localhost:3800/api/` if the PORT still by default. 
    You have just to add the method to call the API.
    for exemple to retrieve a course by his id you shoud send a GET request to the `Endpoint` `http://localhost:3800/api/courseIdHere`

## Endpoints Documentation

Coming soon...