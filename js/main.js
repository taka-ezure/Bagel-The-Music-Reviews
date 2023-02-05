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

$.scrollify({
    section: ".page",//1ページスクロールさせたいエリアクラス名
    scrollbars: "false",//スクロールバー表示・非表示設定
    // interstitialSection: "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "linear", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 200, // スクロール時の速度
});