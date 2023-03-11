var sclTop;

 $(function () {
    $('.btn-more').on('click', function () {
        // $('body').css('overflow', 'hidden');  // 本文の縦スクロールを無効
        $('body').css('position', 'fixed');  // 本文の縦スクロールを無効
        $('.modal').fadeToggle();
        sclTop = $(window).scrollTop();
        $('.inner').offset({ top: (sclTop + 40)});
        $('body').css('top', '-' + sclTop + 'px');
    });

    $('.btn-modal').on('click', function () {
        $('.modal').fadeToggle();
        // $('body').css('overflow','auto');     // 本文の縦スクロールを有効
        $('body').css('position', '');  // 本文の縦スクロールを無効
        $('body').css('top', '');
        $(window).scrollTop(sclTop);
    });
});

/*===================== Navbarのコーディング ===================== */
$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
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
