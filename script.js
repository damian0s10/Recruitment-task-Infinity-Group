$(document).ready(function() {
  //smooth scrolling
  function scroll(e) {
    const href = $(this).attr("href");
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top
      },
      600
    );
    location.hash = href;
  }
  $('.hero-menu-items li a[href^="#"]').click(scroll);

  //close cookies
  function closeCookies() {
    $(".hero-cookies").addClass("hero-cookies-disabled");
  }
  $(".hero-cookies-close").click(closeCookies);

  //slider
  const slides = $(".clients-slide");
  const dots = $(".clients-slider-dot");

  function changeSlide(e) {
    const slideActive = $(".slide-active");
    const idSlideActive = slideActive.attr("id");
    const idLastSlide = slides.last().attr("id");
    const dotActive = $(`.clients-slider-dots #${idSlideActive}`);
    slides.removeClass("slide-active");
    dots.removeClass("dot-active");
    if (e === "timer") {
      if (idSlideActive === idLastSlide) {
        slides.first().addClass("slide-active");
        dots.first().addClass("dot-active");
      } else {
        slideActive.next().addClass("slide-active");
        dotActive.next().addClass("dot-active");
      }
    } else {
      const id = $(this).attr("id");
      $(`.clients-slider #${id}`).addClass("slide-active");
      $(this).addClass("dot-active");
    }
  }
  dots.click(changeSlide);
  setInterval(() => changeSlide("timer"), 5000);

  // show/hide descrobsion of products
  function showDescribtion() {
    products.removeClass("img-active");
    productsText.removeClass("product-under-active");
    $(this).addClass("img-active");
    $(this)
      .next()
      .addClass("product-under-active")
      .mouseleave(hideDescribtion);
  }

  function hideDescribtion() {
    $(this).removeClass("product-under-active");
    $(this)
      .prev()
      .removeClass("img-active");
  }

  const productsText = $(".product-under");
  const products = $(".product-img");
  products.mouseenter(showDescribtion);

  // // toggle menu
  $(".fa-bars").click(function() {
    $(".hero-menu-items").slideToggle();
  });
});
