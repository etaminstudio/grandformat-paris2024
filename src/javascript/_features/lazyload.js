var LazyLoad = require('vanilla-lazyload');

$(document).ready(function(){
  var lazyloader = new LazyLoad({
    elements_selector: '.gfp24_video-embed iframe',
    throttle: 1000
  });
});
