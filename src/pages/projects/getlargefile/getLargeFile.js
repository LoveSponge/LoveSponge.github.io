import { allitems } from './ALLITEMS.js';

export class getLargeFile {
 constructor() {
  this.fileName = "getLargeFile.js"
  this._hello = "Hello from " + this.fileName + "!";
  this._allItems = allitems;
 }

 get hello() {
  return this._hello;
 }

 get allItems() {
  return this._allItems;
 }

 sayHello () {
   return this.hello;
 }

// async getItemsAsync() {
//   console.log("getting items");
//   try {
//   let items = fetch('./ALLITEMS.js');
//   if (items.ok) {
//     let allItems = await items.json();
//     console.log(allItems);
//     console.log("hello");
//   }
//   } catch (error) {
//   console.log(error);
//   }
// }

// async getItemsFILEREADERAsync() {
//   console.log("getting items");
//   try {
//   let items = FileReader('ALLITEMS.json');
//   if (items.ok) {
//     let allItems = await items.json();
//     console.log(allItems);
//     console.log("hello");
//   }
//   } catch (error) {
//   console.log(error);
//   }
// }
}
// let ITS = new getLargeFile();
// console.log(ITS._allItems);
// ITS.getItemsAsync();
// console.log(ITS.hello);
