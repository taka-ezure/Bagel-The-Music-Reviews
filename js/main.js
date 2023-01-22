const app = Vue.createApp({
    data: () => ({
        images: [
            {
                index: 1,
                src: "img/radiohead/1.png"
            },
            {
                index: 2,
                src: "img/radiohead/2.png"
            },
            {
                index: 3,
                src: "img/radiohead/3.png"
            },
            {
                index: 4,
                src: "img/radiohead/4.png"
            }, {
                index: 5,
                src: "img/radiohead/5.png"
            }, {
                index: 6,
                src: "img/radiohead/6.png"
            }, {
                index: 7,
                src: "img/radiohead/7.png"
            },
            {
                index: 8,
                src: "img/radiohead/8.png"
            }
        ]
    })
})
app.mount('#app')
// luxy.init();

$(function(){
    $('header, main, footer').inertiaScroll({
      parent: $("#wrap")

      //オプションを追加する場合はここに追記

    });
  });


$(function () {
    $('.btn-more').on('click', function () {
        $('.modal').fadeToggle();
        var sclTop = $(window).scrollTop();
        $('.inner').offset({ top: (sclTop + 100)});
    });

    $('.btn-modal').on('click', function () {
        $('.modal').fadeToggle();
        $('.inner').offset({ top: (sclTop + 100)});
    });
});

