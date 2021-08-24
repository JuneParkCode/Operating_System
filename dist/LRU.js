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
var _LRU_Cache_SIZE, _LRU_Cache_CacheList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRU_Cache = void 0;
const DoubleLL_1 = require("./DoubleLL");
const LinkNode_1 = require("./LinkNode");
class LRU_Cache {
    constructor(size) {
        _LRU_Cache_SIZE.set(this, void 0);
        _LRU_Cache_CacheList.set(this, void 0);
        __classPrivateFieldSet(this, _LRU_Cache_SIZE, size, "f");
        __classPrivateFieldSet(this, _LRU_Cache_CacheList, new DoubleLL_1.DoubleLinkedList(), "f");
    }
    setData(data, idx) {
        const cached = this.getData(idx);
        if (cached !== false) {
            return cached;
        }
        const newNode = new LinkNode_1.LinkNode(data, idx);
        if (__classPrivateFieldGet(this, _LRU_Cache_SIZE, "f") <= __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").getSize()) {
            __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").pop_front();
        }
        __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").push_back(newNode);
        return newNode;
    }
    getData(idx) {
        // cache에서 데이터를 찾고 없으면 false를 내보내어 그 이하에서 찾도록 함
        const node = this.search(idx);
        if (node === null) {
            return false;
        }
        else {
            this.moveBack(node);
            return node;
        }
    }
    moveBack(node) {
        __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").pop(node);
        __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").push_back(node);
        return node;
    }
    search(idx) {
        let node = __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").getHead();
        while (node !== null) {
            if (node.getIdx() === idx) {
                return node;
            }
            node = node.next();
        }
        return null;
    }
    show() {
        let node = __classPrivateFieldGet(this, _LRU_Cache_CacheList, "f").getHead();
        console.log("=======================");
        while (node !== null) {
            console.log(node.getData(), node.getIdx());
            node = node.next();
        }
        console.log("=======================");
    }
}
exports.LRU_Cache = LRU_Cache;
_LRU_Cache_SIZE = new WeakMap(), _LRU_Cache_CacheList = new WeakMap();
