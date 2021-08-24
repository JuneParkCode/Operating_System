export class LinkNode {
	#parent: LinkNode;
	#child: LinkNode;
	#data: any;
	#idx: number;
	constructor(data: any, idx: number) {
		this.#data = data;
		this.#parent = null;
		this.#child = null;
		this.#idx = idx;
	}
	next(): LinkNode {
		return this.#child;
	}
	prev(): LinkNode {
		return this.#parent;
	}
	setData(data: any): LinkNode {
		this.#data = data;
		return this;
	}
	getIdx(): number {
		return this.#idx;
	}
	getData(): any {
		return this.#data;
	}
	setParent(node: LinkNode): LinkNode {
		this.#parent = node;
		return this;
	}
	setChild(node: LinkNode): LinkNode {
		this.#child = node;
		return this;
	}
	pop(): LinkNode {
		const prevNode: LinkNode = this.prev();
		const nextNode: LinkNode = this.next();

		prevNode?.setChild(nextNode);
		nextNode?.setParent(prevNode);

		this.setParent(null);
		this.setChild(null);

		return this;
	}
}
