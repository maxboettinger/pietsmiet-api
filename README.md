# pietsmiet-api

An (unofficial) wrapper around the pietsmiet.de API.

## Installation

```bash
npm install pietsmiet-api
```

## Usage

**Note:** API requests are signed by a specific request header called _x-origin-integrity_. I have not yet found a way to reverse-engineer the generation, so you'll have to grab the current one by visiting pietsmiet.de and inspecting any request with the browser dev-tools. It changes once(?) a day.

```js
import PietSmietApi from "pietsmiet-api";

const API = new PietSmietApi({
  userAgent: "", // insert your User-Agent
  integrity: "", // insert (your) current x-origin-integrity
});
```

## Endpoints:

This will be updated with more granular information soon(ish)!

### .getVideos()

Used to access published videos.

```js
API.getVideos({
  page: "1",
  limit: "10",
  order: "latest",
}).then((response) => {
  console.log(response);
});
```

### .getPlaylists()

Used to access published playlists.

```js
API.getPlaylists({
  page: "1",
  limit: "10",
  order: "latest",
}).then((response) => {
  console.log(response);
});
```

### .getClips()

Used to access published clips.

```js
API.getClips({
  page: "1",
  limit: "10",
  order: "latest",
}).then((response) => {
  console.log(response);
});
```

### .getPodcasts()

Used to access published podcasts.

```js
API.getPodcasts({
  page: "1",
  limit: "10",
  order: "latest",
}).then((response) => {
  console.log(response);
});
```

### .getChannels()

Used to access channels.

```js
API.getChannels({
  page: "1",
  limit: "10",
  order: "latest",
}).then((response) => {
  console.log(response);
});
```

### .getAuthors()

Used to access authors.

```js
API.getAuthors().then((response) => {
  console.log(response);
});
```

### .getNews()

Used to access published news.

```js
API.getNews({
  page: "1",
  limit: "10",
  order: "latest",
}).then((response) => {
  console.log(response);
});
```
