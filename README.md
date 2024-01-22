# Feds.js

A lightweight package that makes it simple to interact with [feds.lol's](https://feds.lol) API

## Installation and Import

```
npm install feds.js
yarn add feds.js
pnpm add feds.js
```

### ESM

```js
import { Client } from "feds.js";
```

### CommonJS

```js
const { Client } = require("feds.js");
```

## Usage

**Creating an instance of the client and authenticating**

```ts
import { Client, LoginDetails } from "feds.js";
const client = new Client();

// Username + password authentication
const details: LoginDetails = {
    username: "username",
    password: "password",
};

// Email + password authentication
const details: LoginDetails = {
    email: "email@host.com",
    password: "password",
};

// Finally, log in!
client
    .login(auth)
    .then(() => {
        console.log("Successfully logged in");
        // Perform actions against the API
    })
    .catch((error) => {
        // Catch for any errors that occur on login
        console.log(error);
    });
```

## Methods

This wrapper exposes _most_ of the available endpoints, however creating, updating and deleting socials is not yet supported as is fetching the authenticated user's data

We can organise the methods into 6 main groups:

### Free biolink methods

These methods will work for anyone regardless of if they have purchased premium or not

```js
client.biolink.setLink("dumplings");
client.biolink.setName("peanutdumplings");
client.biolink.setBio("an example bio");
client.biolink.setProfilePicture("{profile picture url}");
client.biolink.setBackgroundPicture("{background picture url}");
```

### Premium biolink methods

These methods will allow you to modify settings that a premium user could do, however they will not be displayed on the site

```js
client.biolink.setMP3("{mp3 song url}");
client.biolink.setMP4("{mp4 video url}");
client.biolink.setNameColour("#ff0000");
client.biolink.enableSparkles(true);
client.biolink.enableTypewriter(false);
```

### User methods

These methods allow you to alter your user settings - email address, username and password

```js
client.user.setEmailAddress("test@email.com", "test@host.com");
client.user.setUsername("dumplings");
client.user.setPassword("pass", "word");
```

### Spotify methods

These methods allow you to modify the spotify component of your biolink: setting the track with its track id and the theme that the spotify card will use.

```js
client.spotify.setTrackId("3DK6m7It6Pw857FcQftMds");
client.spotify.setTheme(1);
```

### Discord methods

These methods allow you to modify the discord component of your biolink: setting your discord user id, whether to display your status (online, offline, dnd, idle) and whether to display your current activity

```js
client.discord.setDiscordId("388858536521629706");
client.discord.enableStatus(false);
client.discord.enableActivity(true);
```

### Fetch methods

These methods allow you to fetch a biolink's data and socials

```js
client.biolink.fetch("dumplings").then(console.log);
client.socials.fetch("dumplings").then(console.log);
```

## Planned methods

The following are planned to be implemented:

-   Fetching the logged-in user's data
-   Creating, editing and deleting socials
-   Fetching a user's discord presence information
