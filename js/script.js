//Page loader
$(window).on("load", function () {
  $("#covers").fadeOut(600);
});

$(function () {
  "use strict";
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").on("click", function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  var $magnificPopup = $(".popup-youtube");
  if ($magnificPopup.length && $.fn.magnificPopup) {
    $magnificPopup.magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  $("#play-video").on("click", function (e) {
    e.preventDefault();
    $("#video-overlay").addClass("open");
    $("#video-overlay").append(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
    );
  });
  $(".video-overlay, .video-overlay-close").on("click", function (e) {
    e.preventDefault();
    close_video();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      close_video();
    }
  });

  function close_video() {
    $(".video-overlay.open").removeClass("open").find("iframe").remove();
  }
  var $bannerSlider = $(".banner-slider");
  if ($bannerSlider.length && $.fn.slick) {
    $bannerSlider.slick({
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      infinite: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
  }
  var $mainSlider = $(".main-slider");
  if ($mainSlider.length && $.fn.slick) {
    $mainSlider.slick({
      dots: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  var $serviceSlider = $(".service-slider");
  if ($serviceSlider.length && $.fn.slick) {
    $serviceSlider.slick({
      dots: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  var $doctorSlider = $(".doctors-slider");
  if ($doctorSlider.length && $.fn.slick) {
    $doctorSlider.slick({
      dots: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      loop : true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  var $testiSlider = $(".testi-slider");
  if ($testiSlider.length && $.fn.slick) {
    $testiSlider.slick({
      dots: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  var $ourteamSlider = $(".our-team-slider");
  if ($ourteamSlider.length && $.fn.slick) {
    $ourteamSlider.slick({
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      loop : true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  var $testiSlider2 = $(".testi-slider-style2");
  if ($testiSlider2.length && $.fn.slick) {
    $testiSlider2.slick({
      infinite: true,
      slidesToShow: 1,
      speed: 300,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }
  var $testiSliderstyle2nav = $(".testi-slider-style2-nav");
  if ($testiSliderstyle2nav.length && $.fn.slick) {
    $testiSliderstyle2nav.slick({
      slidesToShow: 5,
      slidesToScroll: 0,
      asNavFor: ".testi-slider-style2",
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".dropdown-menu a.dropdown-toggle").length) {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).closest(".dropdown").hasClass("show")) {
        $(this).closest(".dropdown").first().find(".show").removeClass("show");
      }
      var $subMenu = $(this).closest(".dropdown");
      $subMenu.toggleClass("show");
      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });
      return false;
    });
  }
  if ($.fn.twentytwenty) {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
      default_offset_pct: 0.7,
    });
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
      default_offset_pct: 0.3,
      orientation: "vertical",
    });
  }
});

//Services tab Switch
function tabswitcher() {
  var curtab = window.location.href;
  curtab = curtab.split("#");
  curtab = "#" + curtab[1];

  $("a.tab").each(function (i) {
    if (curtab == $(this).attr("href")) {
      $(this).addClass("show-cat");
    }
  });

  $("div.service").each(function (i) {
    if (curtab == $(this).attr("data-service")) {
      service = $(this).addClass("is-active");
    }
  });
}

$("a.tab").click(function (evt) {
  // Select tab
  evt.preventDefault();
  $("a.tab").removeClass("show-cat");
  let tab_id = $(this).attr("data-tab"); //Right Pane
  $(this).addClass("show-cat"); // Left Pane

  $(".service").removeClass("is-active");
  $("#" + tab_id).addClass("is-active");
});

tabswitcher();

$(".moreless-button").click(function (event) {
  event.preventDefault();
  $(".moretext").slideToggle();
  if ($(".moreless-button").text() == "Read more") {
    $(this).text("Read less");
  } else {
    $(this).text("Read more");
  }
});
