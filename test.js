var assert = require("assert");

var shortener = require("./shortener.js");

var reset = function(){
	shortener.urlId = 0;
	shortener.urls = {};
};

var url = "google.com";

reset();

assert.equal(shortener.nextId(), "1");
assert.equal(shortener.nextId(), "2");

reset();

assert.equal(shortener.shorten(url), "1");

reset();

var urlId = shortener.shorten(url);

assert.equal(shortener.lengthen(urlId), url);

console.log(shortener);