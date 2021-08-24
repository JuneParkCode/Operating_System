import { LRU_Cache } from "./LRU";

const myCache = new LRU_Cache(5);

for (let i = 0; i < 100; i++) {
	const random = Math.floor(Math.random() * 10);
	console.log(`number: ${random}`);
	myCache.setData(random, random);
	myCache.show();
}
