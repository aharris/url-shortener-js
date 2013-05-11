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

// $('#submit').click{

// }

var shortenNow = function(){
	var url = document.getElementById('url-input').value;
	urlShortener.shorten();

	document.getElementById('short-url').innerHTML = urlShortener.urlId;
};

// module.exports = urlShortener;