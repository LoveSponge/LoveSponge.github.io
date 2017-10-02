console.log("hello");
/*
import { allitems } from './ALLITEMS.js';
class ItemService {
 // items = ALLSCRIPTS;
 // recentlyUsedAr = new Array();
 // savedItems = new Array();
 constructor() {
  this._hello = "Hello, world!";
  // this._allItems = ALLITEMS;
  this._allItems = require('./ALLITEMS.js');
 }

 get hello() {
  return this._hello;
 }

 get allItems() {
  return this._allItems;
 }
 /*
  async getItemsAsync() {
   console.log("getting items");
   try {
    let items = fetch('ALLITEMS.json');
    if (items.ok) {
     let allItems = await items.json();
     console.log(allItems);
     console.log("hello");
    }
   } catch (error) {
    console.log(error);
   }
  }

  async getItemsFILEREADERAsync() {
   console.log("getting items");
   try {
    let items = FileReader('ALLITEMS.json');
    if (items.ok) {
     let allItems = await items.json();
     console.log(allItems);
     console.log("hello");
    }
   } catch (error) {
    console.log(error);
   }
  }


getItems() {
 console.log("Getting items...");
}

}
/*
Class Item {
 id: number,
 name: string,
 description: string,
 syntax: string,
 returns: string,
 example: string,
 game: string,
 version: number,
}
*/

class ItemsComponent {
 // let items;
 // let searchText;
 // let i;

 // displayItems() {
 //  let items = itemService.getItems().then(res => res);
 // }
}
let ITS = new ItemService();
console.log(ITS._allItems);
// ITS.getItemsAsync();
// console.log(ITS.hello);
