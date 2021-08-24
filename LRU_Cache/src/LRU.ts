import { DoubleLinkedList } from "./DoubleLL";
import { LinkNode } from "./LinkNode";
export class LRU_Cache {
	#SIZE;
	#CacheList: DoubleLinkedList;
	constructor(size) {
		this.#SIZE = size;
		this.#CacheList = new DoubleLinkedList();
	}
	setData(data: any, idx: number): LinkNode {
		const cached = this.getData(idx);
		if (cached !== false) {
			return cached;
		}

		const newNode = new LinkNode(data, idx);
		if (this.#SIZE <= this.#CacheList.getSize()) {
			this.#CacheList.pop_front();
		}

		this.#CacheList.push_back(newNode);
		return newNode;
	}
	getData(idx: number): any {
		// cache에서 데이터를 찾고 없으면 false를 내보내어 그 이하에서 찾도록 함
		const node = this.search(idx);
		if (node === null) {
			return false;
		} else {
			this.moveBack(node);
			return node;
		}
	}
	moveBack(node: LinkNode): LinkNode {
		this.#CacheList.pop(node);
		this.#CacheList.push_back(node);
		return node;
	}
	search(idx: number): LinkNode {
		let node = this.#CacheList.getHead();
		while (node !== null) {
			if (node.getIdx() === idx) {
				return node;
			}
			node = node.next();
		}
		return null;
	}
	show(): void {
		let node = this.#CacheList.getHead();
		console.log("=======================");
		while (node !== null) {
			console.log(node.getData(), node.getIdx());
			node = node.next();
		}
		console.log("=======================");
	}
}
