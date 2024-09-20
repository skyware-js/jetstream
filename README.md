<p align="center">
	<img src="https://github.com/skyware-js/.github/blob/main/assets/logo-dark.png?raw=true" height="72">
</p>
<h1 align="center">@skyware/jetstream</h1>

A fully typed client for the Bluesky [Jetstream](https://github.com/bluesky-social/jetstream) service.

[Documentation](https://skyware.js.org/docs/jetstream)

## Installation

```sh
npm install @skyware/jetstream
```

## Example Usage

```js
import { Jetstream } from "@skyware/jetstream";

const jetstream = new Jetstream({
	wantedCollections: ["app.bsky.feed.post", "app.bsky.feed.like"], // omit to receive all collections
	wantedDids: ["did:web:example.com"], // omit to receive events from all dids
});

jetstream.onCreate("app.bsky.feed.post", (event) => {
    console.log(`New post: ${event.commit.record.text}`)
});

jetstream.onDelete("app.bsky.feed.post", (event) => {
    console.log(`Deleted post: ${event.commit.rkey}`)
});

// Other events: 
// - "commit" (to receive all commits regardless of collection)
// - "identity" (identity update events)
// - `${collection}` (to receive all commits related to a specific collection)
jetstream.on("account", (event) => {
    console.log(`Account updated: ${event.did}`)
});

jetstream.start()
```
