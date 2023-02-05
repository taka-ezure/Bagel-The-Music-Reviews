const app = Vue.createApp({
    data: () => ({
    })
})
app.mount('#app')


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

