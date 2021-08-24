import { LinkNode } from "./LinkNode";
export class DoubleLinkedList {
	#head: LinkNode;
	#tail: LinkNode;
	#size: number;
	constructor() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}
	getSize(): number {
		return this.#size;
	}
	getHead(): LinkNode {
		return this.#head;
	}
	setHead(node: LinkNode): LinkNode {
		this.#head = node;
		return node;
	}
	getTail(): LinkNode {
		return this.#tail;
	}
	setTail(node: LinkNode): LinkNode {
		this.#tail = node;
		return node;
	}
	push_back(newNode: LinkNode): LinkNode {
		const tailNode: LinkNode = this.getTail();
		if (tailNode !== null) {
			newNode.setParent(tailNode);
			tailNode.setChild(newNode);
		} else {
			this.setHead(newNode);
		}
		this.setTail(newNode);
		++this.#size;
		return newNode;
	}
	pop_front(): LinkNode {
		const headNode: LinkNode = this.getHead();
		if (headNode === null) {
			return null;
		} else {
			const nextHead = headNode.next();
			this.setHead(nextHead);
			nextHead?.setParent(null);
			--this.#size;
			return headNode;
		}
	}
	pop(node: LinkNode): LinkNode {
		if (node === this.getHead()) {
			this.setHead(node.next());
		}
		if (node === this.getTail()) {
			this.setTail(node.prev());
		}
		return node.pop();
	}
}
