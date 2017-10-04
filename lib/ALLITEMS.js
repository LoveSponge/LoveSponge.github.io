"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var allitems = exports.allitems = [{
  "id": 1,
  "name": "- a",
  "description": "Unary minus: zero minus a",
  "syntax": "- a",
  "returns": "Number",
  "example": "- -10",
  "game": "Operation Flashpoint",
  "version": 1
}, {
  "id": 2,
  "name": "! a",
  "description": "Returns a negation of Boolean expression. That means true becomes false and vice versa.",
  "syntax": "Boolean = ! a",
  "returns": "Boolean",
  "example": "_a = alive player; if (!_a) then {     hint 'The player is dead!'; }",
  "game": "Operation Flashpoint",
  "version": 1
}, {
  "id": 3,
  "name": "a - b",
  "description": "Subtracts b from a. a and b need to be of the same type, both Numbers or both Arrays. In Arma 3 it is possible to subtract nested arrays.",
  "syntax": "a - b",
  "returns": "b: Number or Array",
  "example": "_sum = 10 - 7; //_sum is 3",
  "game": "Operation Flashpoint",
  "version": 1
}];

exports.ALLITEMS = ALLITEMS;
// module.exports = ALLITEMS;