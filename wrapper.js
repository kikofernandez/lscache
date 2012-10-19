var wrapper = (function(){
	function get(key){
		var value = lscache.get(key);
		if(value===null){
			value = templates.get(key);
		}
		return value;
	}

	function remove(key){
		lscache.remove(key);
		templates.remove(key);
	}

	function set(key, value, opts){
		return typeof(value)==='function' ? templates.set(key, value, opts) : lscache.set(key, value);
	}

	return {
		get: get,
		set: set,
		remove: remove,
	}
})()