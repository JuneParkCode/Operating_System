"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DoubleLinkedList_head, _DoubleLinkedList_tail, _DoubleLinkedList_size;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLinkedList = void 0;
class DoubleLinkedList {
    constructor() {
        _DoubleLinkedList_head.set(this, void 0);
        _DoubleLinkedList_tail.set(this, void 0);
        _DoubleLinkedList_size.set(this, void 0);
        __classPrivateFieldSet(this, _DoubleLinkedList_head, null, "f");
        __classPrivateFieldSet(this, _DoubleLinkedList_tail, null, "f");
        __classPrivateFieldSet(this, _DoubleLinkedList_size, 0, "f");
    }
    getSize() {
        return __classPrivateFieldGet(this, _DoubleLinkedList_size, "f");
    }
    getHead() {
        return __classPrivateFieldGet(this, _DoubleLinkedList_head, "f");
    }
    setHead(node) {
        __classPrivateFieldSet(this, _DoubleLinkedList_head, node, "f");
        return node;
    }
    getTail() {
        return __classPrivateFieldGet(this, _DoubleLinkedList_tail, "f");
    }
    setTail(node) {
        __classPrivateFieldSet(this, _DoubleLinkedList_tail, node, "f");
        return node;
    }
    push_back(newNode) {
        const tailNode = this.getTail();
        if (tailNode !== null) {
            newNode.setParent(tailNode);
            tailNode.setChild(newNode);
        }
        else {
            this.setHead(newNode);
        }
        this.setTail(newNode);
        __classPrivateFieldSet(this, _DoubleLinkedList_size, +__classPrivateFieldGet(this, _DoubleLinkedList_size, "f") + 1, "f");
        return newNode;
    }
    pop_front() {
        const headNode = this.getHead();
        if (headNode === null) {
            return null;
        }
        else {
            const nextHead = headNode.next();
            this.setHead(nextHead);
            nextHead === null || nextHead === void 0 ? void 0 : nextHead.setParent(null);
            __classPrivateFieldSet(this, _DoubleLinkedList_size, +__classPrivateFieldGet(this, _DoubleLinkedList_size, "f") - 1, "f");
            return headNode;
        }
    }
    pop(node) {
        if (node === this.getHead()) {
            this.setHead(node.next());
        }
        if (node === this.getTail()) {
            this.setTail(node.prev());
        }
        return node.pop();
    }
}
exports.DoubleLinkedList = DoubleLinkedList;
_DoubleLinkedList_head = new WeakMap(), _DoubleLinkedList_tail = new WeakMap(), _DoubleLinkedList_size = new WeakMap();
