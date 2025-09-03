import { HashMap } from "./HashMap.mjs";

const map = new HashMap();
let mapLength;
let mapLoadLevel;
let getHat;
let getCat;
let hasDog;
let hasCat;
let removeApple;
let keys;
let values;
let entries;

map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");

mapLength = map.length();
mapLoadLevel = map.loadLevel();
console.log({ mapLength, mapLoadLevel }); // 12, 0.75
map.set("lion", "gilded");
mapLength = map.length();
mapLoadLevel = map.loadLevel();
console.log({ mapLength, mapLoadLevel }); // 12, 0.75
map.set("moon", "silver");
mapLength = map.length();
mapLoadLevel = map.loadLevel();
console.log({ mapLength, mapLoadLevel }); // 13, 0.375

// Check if all other methods still work after expanding the hash map:
getHat = map.get("hat"); 
getCat = map.get("cat"); 
hasDog = map.has("dog"); 
hasCat = map.has("cat");
console.log({ getHat, getCat, hasDog, hasCat }); // 'black, null, true, false
removeApple = map.remove("apple");
mapLength = map.length();
mapLoadLevel = map.loadLevel();
console.log({ removeApple, mapLength, mapLoadLevel }); // true, 12, 0.375
map.clear();
mapLength = map.length();
console.log({mapLength}); // 0
