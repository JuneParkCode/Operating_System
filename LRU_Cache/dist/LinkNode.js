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
var _LinkNode_parent, _LinkNode_child, _LinkNode_data, _LinkNode_idx;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkNode = void 0;
class LinkNode {
    constructor(data, idx) {
        _LinkNode_parent.set(this, void 0);
        _LinkNode_child.set(this, void 0);
        _LinkNode_data.set(this, void 0);
        _LinkNode_idx.set(this, void 0);
        __classPrivateFieldSet(this, _LinkNode_data, data, "f");
        __classPrivateFieldSet(this, _LinkNode_parent, null, "f");
        __classPrivateFieldSet(this, _LinkNode_child, null, "f");
        __classPrivateFieldSet(this, _LinkNode_idx, idx, "f");
    }
    next() {
        return __classPrivateFieldGet(this, _LinkNode_child, "f");
    }
    prev() {
        return __classPrivateFieldGet(this, _LinkNode_parent, "f");
    }
    setData(data) {
        __classPrivateFieldSet(this, _LinkNode_data, data, "f");
        return this;
    }
    getIdx() {
        return __classPrivateFieldGet(this, _LinkNode_idx, "f");
    }
    getData() {
        return __classPrivateFieldGet(this, _LinkNode_data, "f");
    }
    setParent(node) {
        __classPrivateFieldSet(this, _LinkNode_parent, node, "f");
        return this;
    }
    setChild(node) {
        __classPrivateFieldSet(this, _LinkNode_child, node, "f");
        return this;
    }
    pop() {
        const prevNode = this.prev();
        const nextNode = this.next();
        prevNode === null || prevNode === void 0 ? void 0 : prevNode.setChild(nextNode);
        nextNode === null || nextNode === void 0 ? void 0 : nextNode.setParent(prevNode);
        this.setParent(null);
        this.setChild(null);
        return this;
    }
}
exports.LinkNode = LinkNode;
_LinkNode_parent = new WeakMap(), _LinkNode_child = new WeakMap(), _LinkNode_data = new WeakMap(), _LinkNode_idx = new WeakMap();
