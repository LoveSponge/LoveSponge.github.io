"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ALLITEMS = require("ALLITEMS.js");

var _ALLITEMS2 = _interopRequireDefault(_ALLITEMS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemService = function () {
  // items = ALLSCRIPTS;
  // recentlyUsedAr = new Array();
  // savedItems = new Array();
  function ItemService() {
    _classCallCheck(this, ItemService);

    this._hello = "Hello, world!";
    this._allItems = _ALLITEMS2.default;
  }

  _createClass(ItemService, [{
    key: "hello",
    get: function get() {
      return this._hello;
    }
  }, {
    key: "allItems",
    get: function get() {
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
     */

  }]);

  return ItemService;
}();
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

var ItemsComponent = function ItemsComponent() {
  _classCallCheck(this, ItemsComponent);
};

var ITS = new ItemService();
console.log(ITS._allItems);
// ITS.getItemsAsync();
// console.log(ITS.hello);