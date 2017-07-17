;(function(window, document){
	function throttle(fn, delay){ //节流函数(delay 毫秒后执行)
	  var timer = null;
	  return function handler(){
	    var context = this;
	    args = arguments;
	    clearTimeout(timer);
	    timer = setTimeout(function(){
	      fn.apply(context, args);
	    },delay);
	  }
	}
	window.addEventListener('load', function(){
		var vw = window.innerWidth;
		document.body.style.zoom = vw / 750;
	});
	window.addEventListener('resize', throttle(function(){
		var vw = window.innerWidth;
		document.body.style.zoom = vw / 750;
	}, 100));
})(window, document);