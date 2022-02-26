'use strict';

// animate
$('.leftTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeInLeft');//クラス名が付与
    }
  });

  $('.rightTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeInRight');//クラス名が付与
    }
  });
