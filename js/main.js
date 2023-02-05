const app = Vue.createApp({
    data: () => ({
    })
})
app.mount('#app')

// luxy.init();

// $(function(){
//     $('header, main, footer').inertiaScroll({
//       parent: $("#wrap")

//       //オプションを追加する場合はここに追記

//     });
//   });


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

