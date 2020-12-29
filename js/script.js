$(function () {
  $('.introduction__slider').slick({
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    mobileFirst: true,

    responsive: [
      {
        breakpoint: 1078,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2.3,
        },
        breakpoint: 319,
        settings: {
          slidesToShow: 1.65,
        },
      },
    ],
  });

  $(window).scroll(function () {
    // スクロール値計測
    const scr_count = $(document).scrollTop();
    if (scr_count > 500) {
      $('.header').addClass('open');
    } else {
      $('.header').removeClass('open');
    }
  });

  // メニュー部分すべて
  $('.header__hamburger').on('click', function () {
    $('.header').add('body').toggleClass('active');
  });

  $('.menu__link , .menu__link--deco,.menu__listItem--deco2').on('click', function () {
    $('.header').removeClass('active');
  });

  $('a[href^="#"]').click(function () {
    if ($('.header__hamburger').prop('checked')) {
      $('.header__hamburger').prop('checked', false);
    }
    var speed = 1000;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top - 80;
    var positionIntro = target.offset().top;
    if (href === '#introduction') {
      $('html, body').animate(
        {
          scrollTop: positionIntro,
        },
        speed,
        'swing'
      );
    } else {
      $('html, body').animate(
        {
          scrollTop: position,
        },
        speed,
        'swing'
      );
    }
    return false;
  });
});
