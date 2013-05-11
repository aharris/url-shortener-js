var urlShortener = {
	urls : {},
	urlId : 0,
	nextId : function() {
		this.urlId++;
		return this.urlId;
	},
	shorten : function(url){
		var nextIdResult = this.nextId();
		this.urls[nextIdResult] = url;
		return nextIdResult;
	},
	lengthen : function(urlId) {
		return this.urls[urlId];
	}
}

module.exports = urlShortener;