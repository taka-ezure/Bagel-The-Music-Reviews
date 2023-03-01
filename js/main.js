  $(function () {
    $('.btn-more').on('click', function () {
        $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効
        $('.modal').fadeToggle();
        var sclTop = $(window).scrollTop();
        $('.inner').offset({ top: (sclTop + 40)});
    });

    $('.btn-modal').on('click', function () {
        $('body').css('overflow-y','auto');     // 本文の縦スクロールを有効
        $('.modal').fadeToggle();
    });
});

