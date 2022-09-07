# pietsmiet-api

[![Version](https://img.shields.io/npm/v/pietsmiet-api.svg)](https://www.npmjs.com/package/pietsmiet-api)
[![Downloads/week](https://img.shields.io/npm/dw/pietsmiet-api.svg)](https://www.npmjs.com/package/pietsmiet-api)
[![License](https://img.shields.io/npm/l/pietsmiet-api.svg)](https://github.com/maxboettinger/pietsmiet-api/blob/master/package.json)

An (unofficial) wrapper around the [pietsmiet.de](https://www.pietsmiet.de/) API.

## Installation

```bash
npm install pietsmiet-api
```

## Usage

**Note:** API requests are signed by a custom request header called _x-origin-integrity_. I have reverse-engineered the generation, but as this is meant to prevent abuse, its not implemented directly in this module.

**Setup:** Visit [pietsmiet.de](https://www.pietsmiet.de/) and inspect any (api-)request with the browser dev-tools. Copy the value for _x-origin-integrity_ and use to initialize your PietSmietApi instance.

Constructor expects argument of type [initConfig](#initconfig).

```js
import PietSmietApi from "pietsmiet-api";

const API = new PietSmietApi({
  userAgent: "", // insert your User-Agent (might be optional)
  integrity: "", // insert (your) current x-origin-integrity
});
```

## Endpoints:

This will be updated with more granular information soon(ish)!

### .getVideos()

Used to access published videos. Expects argument of type [contentRequest](#contentrequest).

```js
API.getVideos({
  page: "1",
  limit: "10",
  order: "latest",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

### .getPlaylists()

Used to access published playlists. Expects argument of type [contentRequest](#contentrequest).

```js
API.getPlaylists({
  page: "1",
  limit: "10",
  order: "latest",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

### .getClips()

Used to access published clips. Expects argument of type [contentRequest](#contentrequest).

```js
API.getClips({
  page: "1",
  limit: "10",
  order: "latest",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

### .getPodcasts()

Used to access published podcasts. Expects argument of type [contentRequest](#contentrequest).

```js
API.getPodcasts({
  page: "1",
  limit: "10",
  order: "latest",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

### .getChannels()

Used to access channels. Expects argument of type [contentRequest](#contentrequest).

```js
API.getChannels({
  page: "1",
  limit: "10",
  order: "latest",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

### .getAuthors()

Used to access authors.

```js
API.getAuthors()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

### .getNews()

Used to access published news. Expects argument of type [contentRequest](#contentrequest).

```js
API.getNews({
  page: "1",
  limit: "10",
  order: "latest",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Types:

### initConfig

```ts
type initConfig = {
  userAgent: string; // e.g. "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"; (might be optional)
  integrity: string; // e.g. "3f3749c0";
};
```

### contentRequest

```ts
type contentRequest = {
  page: string; // pagination offset. Can be derived from last response.
  limit: string; // limit results. Maximum is 500.
  order: string; // choose what to sort the results by. Supported options: <latest/oldest/popular/trending>
  channels?: string; // optional argument for getVideos() method. Limit search to specific channel. <8(Frag Pietsmiet)/9(pietmiet)/10(Pietsmiet TV)/12(Best of Pietsmiet)/37(PietsmietDE)/44(Streams)>
};
```

## Build

```sh
git clone https://github.com/maxboettinger/pietsmiet-api.git
cd pietsmiet-api
npm i
npm run local
```
