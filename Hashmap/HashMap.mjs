import { LinkedList } from "./LinkedList.mjs";

export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
    this.size = 0;
  }
  loadLevel() {
    return this.length() / this.capacity;
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
  grow() {
    let oldEntries = this.entries();
    this.capacity *= 2;
    this.clear();
    oldEntries.forEach((entry) => this.set(entry[0], entry[1]));
  }
  set(key, value) {
    let index = this.hash(key);
    const added = this.buckets[index].set(key, value);
    if (added) {
      this.size = this.length();
      if (this.size > this.loadFactor * this.capacity) {
        this.grow();
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    return this.buckets[index].get(key);
  }
  has(key) {
    let index = this.hash(key);
    return this.buckets[index].has(key);
  }
  remove(key) {
    let index = this.hash(key);
    const removed = this.buckets[index].remove(key);
    this.size = this.length();
    return removed;
  }
  length() {
    let count = 0;
    for (let i = 0; i < this.capacity; i++) {
      count += this.buckets[i].length();
    }
    return count;
  }
  clear() {
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
    this.size = 0;
  }
  keys() {
    let arr = [];
    for (let i = 0; i < this.capacity; i++) {
      arr.push(...this.buckets[i].keys());
    }
    return arr;
  }
  values() {
    let arr = [];
    for (let i = 0; i < this.capacity; i++) {
      arr.push(...this.buckets[i].values());
    }
    return arr;
  }
  entries() {
    let arr = [];
    for (let i = 0; i < this.capacity; i++) {
      arr.push(...this.buckets[i].entries());
    }
    return arr;
  }
}
