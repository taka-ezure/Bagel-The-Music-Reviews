var sclTop
$(function () {
  $('.btn-more').on('click', function () {
    $('.modal').fadeToggle();
    // $('body').css('position', 'fixed');  // 本文の縦スクロールを無効
    // $('.modal').css('display', 'block');  // 本文の縦スクロールを無効
    sclTop = $(window).scrollTop();
    $('body').css('overflow', 'hidden');  // 本文の縦スクロールを無効
		$('body').addClass('fixed').css({'top': sclTop});
    // $('.inner').offset({ top: (sclTop + 40) });
    $('.inner').offset({ top: (sclTop + '2%') });
  });

  $('.btn-modal').on('click', function () {
    $('.modal').fadeToggle();
    $('body').css('overflow', 'auto');     // 本文の縦スクロールを有効
    $('body').removeClass('fixed').css({'top': sclTop});
    // window.scrollTo(0, sclTop);
    // $('body').css('position', 'static'); // 本文の縦スクロールを無効
    $(window).scrollTop(sclTop);  // 本文の縦スクロールを無効
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
