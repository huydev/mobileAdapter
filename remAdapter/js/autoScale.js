/**
 * rem精简版
 * 不考虑dpr，全部当成1倍屏来处理。
 */
;(function(win, doc){
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
  var docElem = doc.documentElement;
  function setFontSize(){
    var fz = window.innerWidth / 10;
    docElem.style.fontSize = fz + 'px';
    doc.body.style.fontSize = '16px';
  }

  doc.addEventListener('DOMContentLoaded', setFontSize);
  win.addEventListener('resize', throttle(function(){
    setFontSize()
  }, 100));
})(window, document);