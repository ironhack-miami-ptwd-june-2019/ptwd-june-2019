![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Express + React Deployment - Cheat Sheet

## 1. Create a [new app on Heroku](https://dashboard.heroku.com/new-app)

- Prerequisites
  We should have: - A Heroku account created - The [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- give your app a meaningful name and remember - your app will have the next format: **name-you-give.herokuapp.com**

**_Steps 2 and 3 are on frontend/client side._**

## 2. Setup `environment variables` on client/React app

### 2.1 Go inside client side folder and **create two new file in the root**:

```bash
$ cd your-app-client-side
$ touch .env.development .env.production
```

### 2.2 update newly created files:

```bash
# .env.development
# use api only if all your routes are prefixed with "/api" in the backend
REACT_APP_API_URL=http://localhost:3001/api

#  .env.production
# the same as above - use api only if all your routes have that in that backend
REACT_APP_API_URL = https://name-of-your-app.herokuapp.com/api
```

### 2.3 In your components and find all the _axios_ calls and update them following this example:

```bash
axios.get(`${process.env.REACT_APP_API_URL}/some-route`, {withCredentials: true})

```

### 2.4 In _.env.development_ and _.env.production_ we should store important data for these two stages so they can become interchangeable depending if we are in development or production mode. We have to **update package.json on the client side**:

```javascript
// ...
"scripts": {
    "start": "react-scripts start",
    "build-dev": "dotenv -e .env.development react-scripts build", <==!!!
    "build-prod": "dotenv -e .env.production react-scripts build", <==!!!
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
}
// ...
```

## 3. Bundle the React App

### 3.1 When inside client-side folder, on the root level, run the following command:

```bash
$ npm run build
```

This step will produce:

- a new directory (called **build** - _we will come back to it in a sec_) and
- **index.html** file that will be the entrance point of the entire app.

### 3.2 Copy everything from the `build` folder and paste it into `/public` folder on the server side

### 3.3 Update _app.js_ on the server side

The bundle has created _index.html_ so to make it accessible to our server side by adding the following code in **app.js right after routes middleware and just before module.exports = app;**:

```javascript
// app.js

...

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});
...
```

We are done with the client side.

**_Steps 4 - 6 are on backend/API/server side._**

## 4. [If not done earlier] Initialize your server side repo as _git repository_

### 4.1 Initialize git repo

```bash
$ cd app-name-server-side
$ git init
```

### 4.2 Connect it with the coresponding GitHub repo:

```bash
$ git remote add origin your-github-repo-url
```

### 4.3 Check if it went right:

```bash
$ git remote -v
------
expected output:

origin    https://github.com/yourusername/app-name-server.git (fetch)
origin    https://github.com/yourusername/app-name-server.git (push)
```

## 5. Connect this repository to Heroku

- To make connection, run the following command:

```bash
$ heroku git:remote -a name-of-your-heroku-app
```

- Now if you run **git remote -v**:

```bash

 $ git remote -v
 ------
 expected output:

heroku    https://git.heroku.com/name-of-your-heroku-app.git (fetch)
heroku    https://git.heroku.com/name-of-your-heroku-app.git (push)
origin    https://github.com/yourusername/app-name-server.git (fetch)
origin    https://github.com/yourusername/app-name-server.git (push)
```

## 6. MLab configuration

### 6.1 From the terminal, inside the `server` folder:

```bash
$ heroku addons:create mongolab:sandbox
```

### 6.2 In our Heroku dashboard, under the _Resources_ tab we should see the addon successfully installed.

### 6.3 From the terminal, inside the `server` folder:

```bash
$ heroku config:get MONGODB_URI
```

### 6.4 Check for MONGODB_URI in our Heroku app, under the `Settings` tab and inside `Reveal Config Vars`

## 7. Deploy

**We are deploying server side of the full-stack app because we bundled our client app and pasted the bundle (plenty of minified files) into the /public folder**.

Inside the server-side app, run the following commands:

```bash
$ git add .
$ git commit -m"initial commit to heroku"
$ git push heroku master
```

If everything was built and bundled successfully, you can now run:

```bash
$ heroku open
```

**With** :heart: **from Ironhack** :rocket:
