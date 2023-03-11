  $(function () {
    $('.btn-more').on('click', function () {
        $('body').css('overflow', 'hidden');  // 本文の縦スクロールを無効
        $('body').css('dispaly', '100%');  // 本文の縦スクロールを無効
        $('.modal').fadeToggle();
        var sclTop = $(window).scrollTop();
        $('.inner').offset({ top: (sclTop + 40)});
    });

    $('.btn-modal').on('click', function () {
        $('.modal').fadeToggle();
        $('body').css('overflow','auto');     // 本文の縦スクロールを有効
        $('body').css('height', 'auto');  // 本文の縦スクロールを無効
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
