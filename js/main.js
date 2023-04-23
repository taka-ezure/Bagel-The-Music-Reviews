var sclTop
var target
var modal
var headerH = $('.kv-wrapper').outerHeight(true);

$(function () {
  $('.btn-more').on('click', function () {
    target = $(this).data('target');
    modal = document.getElementById(target);
    $(modal).fadeToggle();
    // $('body').css('position', 'fixed');  // 本文の縦スクロールを無効
    // $('.modal').css('display', 'block');  // 本文の縦スクロールを無効
    sclTop = $(window).scrollTop();
    $('body').css('overflow', 'hidden');  // 本文の縦スクロールを無効
    // $('body').addClass('fixed').css({'top': sclTop});
    // $('.inner').offset({ top: (sclTop + 40) });
    $('.inner').offset({ top: (sclTop + '4.7%') });

  });

  $('.btn-modal').on('click', function () {
    $(modal).fadeToggle();
    $('body').css('overflow', 'auto');     // 本文の縦スクロールを有効
    // $('body').removeClass('fixed').css({'top': sclTop});
    // window.scrollTo(0, sclTop);
    // $('body').css('position', 'static'); // 本文の縦スクロールを無効
    // $(window).scrollTop(sclTop);  // 本文の縦スクロールを無効
  });

  var flg = null;
  var check_access = function () {
    // ★sessionStorageの値を判定
    if (sessionStorage.getItem('access_flg')) {
      // 2回目以降
      flg = 1;
    } else {
      // 1回目
      sessionStorage.setItem('access_flg', true);
      flg = 0
    }
    return flg;
  }

  var $i = check_access();
  if($i == 0){
    // 1回目アクセスの処理
  }else{
    // 2回目アクセスの処理
  }

  // ローディング
  setTimeout(function() {
    $('.loader').fadeOut(500);
  }, 1000); // 5秒後にfadeOut処理
});

/*===================== Navbarのコーディング ===================== */
$('.menu-trigger').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('nav').removeClass('open');
    // $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
    // $('.overlay').addClass('open');
  }
});
/*===================== Navbarのコーディング ===================== */

/*===================== 固定バーのコーディング ===================== */
var wrapper = $(".wrapper");
$(window).on('load scroll', function () {
  if ($(this).scrollTop() > headerH && wrapper.hasClass('is-fixed') == false) {
    wrapper.addClass('is-fixed');
    $('#yoko_logo').css('display', 'block');
  }
  else if ($(this).scrollTop() < headerH && wrapper.hasClass('is-fixed') == true) {
    wrapper.removeClass('is-fixed');
    $('#yoko_logo').css('display', 'none');
  }
});
/*===================== 固定バーのコーディング ===================== */

/*===================== ローディングのコーディング ===================== */




// $(function(){
//   var flg = null;
//   var check_access = function () {
//     // ★sessionStorageの値を判定
//     if (sessionStorage.getItem('access_flg')) {
//       // 2回目以降
//       flg = 1;
//     } else {
//       // 1回目
//       sessionStorage.setItem('access_flg', true);
//       flg = 0
//     }
//     return flg;
//   }

//   var $i = check_access();
//   if($i == 0){
//     // 1回目アクセスの処理
//   }else{
//     // 2回目アクセスの処理
//   }
// })
 
 /*===================== ローディングのコーディング ===================== */
