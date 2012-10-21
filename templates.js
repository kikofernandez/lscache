var templates = function(){
	var l = {};

	function get(key){
		return l[key].params == undefined ? l[key].func() : l[key].func(l[key].params);
	}

	function set(key, fun, opts){
		l[key] = { func: fun, params: opts };
	}

	function remove(key){
		console.log('not implemented');
	}

	function getParams(){

	}

	return {
		get: get,
		getParams: getParams,
		set: set,
		remove: remove,
	}

}();
/*
var t = (function(){ 
	var t = function(){ 
		return new t.fn.init();
	}; 

	t.fn = t.prototype = { 
		constructor: t, 
		init: function(){ 
			console.log('init'); 
		},

		ja: function(){
			console.log('ja');
		},

		jo: function(){
			console.log('jo');
		}
	}; 

	t.fn.init.prototype = t.fn; 
})()
*/