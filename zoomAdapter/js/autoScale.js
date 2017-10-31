/**
 * zoom版
 * https://github.com/huydev/mobileAdapter
 * huychangdev@gmail.com
 */
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
	function setScale(){
		var vw = window.innerWidth;
		document.getElementById('wrapper').style.zoom = vw / 750;
	}

	document.addEventListener('DOMContentLoaded', function(){
		setScale();
	});
	window.addEventListener('resize', throttle(function(){
		setScale();
	}, 100));
})(window, document);