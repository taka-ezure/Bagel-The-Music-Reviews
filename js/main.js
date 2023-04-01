var sclTop
var target
var modal
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
      if ($(this).scrollTop() > 1 && wrapper.hasClass('is-fixed') == false) {
        wrapper.css("background-color", "#1C2C27");
        $('#yoko_logo').css('display', 'block');
        wrapper.addClass('is-fixed');
      }
      else if ($(this).scrollTop() < 1 && wrapper.hasClass('is-fixed') == true) {
        wrapper.removeClass('is-fixed');
        wrapper.css("background-color", "transparent");
        $('#yoko_logo').css('display', 'none');
    }
  });
  /*===================== 固定バーのコーディング ===================== */

  