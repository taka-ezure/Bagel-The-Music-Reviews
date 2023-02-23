  //使う変数を用意
  let flag = true,
      $block = $('.block'),
      $body = $('body'),
      $wrap = $('.wrap'),
      sc = $wrap.scrollTop(),
      scroll = 0,
      direction,
      target,
      $link = $('a');
 
  //スクロールハイジャック用
  const handle = (event) => {
    event.preventDefault();
  }
 
  //スクロールハイジャックを解除する関数
  function timer() {
    const time = setTimeout(timer, 100);
    count += 100;
    if (count >= 300) {
      window.removeEventListener('touchmove', handle, {
        passive: false
      });
      window.removeEventListener('mousewheel', handle, {
        passive: false
      });
      clearTimeout(time);
    }
  }
 
  //スクロールハイジャックをする関数
  function scrollJack() {
    window.addEventListener('touchmove', handle, {
      passive: false
    });
    window.addEventListener('mousewheel', handle, {
      passive: false
    });
  }
 
  //スクロールの方向を調べる処理
  $wrap.on('scroll', function () {
    if ($(this).scrollTop() < scroll) {
      direction = 'up';
    } else {
      direction = 'down';
    }
    scroll = $(this).scrollTop();
  });
 
  // Intersection Observerで交差を監視する要素を配列にする
  const blocks = document.querySelectorAll(".block");
 
  // Intersection Observerの設定
  const options = {
    root: null,
    rootMargin: '-1px 0px',
    threshold: 0
  };
 
  // Intersection Observerを使えるようにする
  const observer = new IntersectionObserver(intersect, options);
 
  // 要素を監視する
  blocks.forEach(block => {
    observer.observe(block);
  });
 
  //スナップスクロール時のアニメーション設定用の関数
  function move(position) {
    $wrap.stop().animate({
      'scrollTop': position
    }, 1500, 'easeInOutSine', function () {
      count = 0;
      timer();
      flag = true;
    });
  }
 
  // 交差したときに実行する関数
  function intersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        snapScroll(entry.target);
      }
    });
  }
 
  // スクロールの方向によって移動＆ナビにクラスをつけ外しする関数
  function snapScroll(element) {
    if (flag) {
      let $active = $(element);
      let current = $active.attr('id');
      $link.each(function () {
        if ($(this).attr('href') == '#' + current) {
          $link.removeClass('active');
          $(this).addClass('active');
        }
      });
      sc = $wrap.scrollTop();
      if (direction == 'up') {
        scrollJack();
        let bpt = $active.offset().top + sc;
        let ph = $active.outerHeight();
        let hSize = window.innerHeight;
        let pnb = bpt + (ph - hSize);
        move(pnb);
      } else if (direction == 'down') {
        scrollJack();
        let bpt = $active.offset().top + sc;
        move(bpt);
      }
    }
  }
 






  $(function () {
    $('.btn-more').on('click', function () {
        $('.modal').fadeToggle();
        var sclTop = $(window).scrollTop();
        $('.inner').offset({ top: (sclTop + 10)});
    });

    $('.btn-modal').on('click', function () {
        $('.modal').fadeToggle();
        $('.inner').offset({ top: (sclTop + 10)});
    });
});

$.scrollify({
    section: ".page",//1ページスクロールさせたいエリアクラス名
    scrollbars: "false",//スクロールバー表示・非表示設定
    // interstitialSection: "#arti",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "linear", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 200, // スクロール時の速度
});