'use strict';

//iphone用100vh(jquery)

$(window).on('load resize', function(){
    $('.top').css('height',$(window).height());
    });

