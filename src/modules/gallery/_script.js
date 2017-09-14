'use strict';

var Flickity = require('flickity-imagesloaded');

var GFp24 = window.GFp24 || {};

GFp24.gallery = (function(){

  function module(selector){
    var $el = $(selector),
      $wrapper;

    function init(){
      $wrapper = $el.find('.gfp24_gallery-items');

      new Flickity($wrapper.get(0), {
        imagesLoaded: true,
        lazyLoad: true,
        pageDots: false
      });
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      module(this);
    });
  };

})();

$(document).ready(function(){
  GFp24.gallery('.gfp24_gallery');
});
