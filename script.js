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

// cookies
function closeCookies() {
  $(".cookies").remove();
}

$(function() {
  const htmlCookies = `<section class="cookies">
<div class="cookies-container">
  <img src="img/cookie.png" alt=cookies>
  <p class="cookies-text">We use own and third party cookies to improve our services and show ads related to your preferences by analyzing your browser habits . If you continue browsing , we consider you accept its use. You can switch the configuration or learn more <a href="#">here</a></p>
  <button onclick="closeCookies()" class="cookies-close">CLOSE X</button>
</div>
</section>`;

  $("body").append(htmlCookies);
});

//slider

const data = [
  {
    id: "slide1",
    img: "img/mark.png",
    alt: "quotation-mark",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Project Manager",
    feautures: ["web design", "usability", "e-commerce"]
  },
  {
    id: "slide2",
    img: "img/mark.png",
    alt: "quotation-mark",
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Frontend Developer",
    feautures: ["web design", "e-commerce", "usability"]
  },
  {
    id: "slide3",
    img: "img/mark.png",
    alt: "quotation-mark",
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Backend Developer",
    feautures: ["e-commerce", "web design", "usability"]
  }
];
let number = 0;
let timer1 = 0;
let timer2 = 0;
let changed = true;
function setSlide(indexOfSlider) {
  if (indexOfSlider !== number && changed) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = indexOfSlider - 1;
    hideSlide();
    setTimeout(changeSlide, 500);
  }
}
function hideSlide() {
  changed = false;
  $(".clients-slide-container").fadeOut(560);
}
function changeSlide() {
  number++;
  if (number > 3) number = 1;
  const index = number - 1;
  const dots = $(".clients-slider-dot");
  dots.removeClass("dot-active");
  $(dots[index]).addClass("dot-active");
  const html = `<div class="clients-slider">
                    <div id='${data[index].id}' class="clients-slide">
                      <img src="${data[index].img}" alt="${data[index].alt}">
                      <div class='clients-slide-content'>
                        <p class='clients-slide-text'>${data[index].text}</p>
                        <p class='clients-slide-author'> ${
                          data[index].author
                        } / <a href='https://www.infinity-group.pl/' target='_blank'>Infinity-group.pl</a></p>
                        <div class='clients-slide-features' >
                          <div class='clients-slide-feature'>
                            <p>${data[index].feautures[0]}</p>
                          </div>
                          <div class='clients-slide-feature'>
                            <p>${data[index].feautures[1]}</p>
                          </div>
                          <div class='clients-slide-feature'>
                            <p>${data[index].feautures[2]}</p>
                          </div>
                        </div>
                      </div>
                    </div>`;

  document.querySelector(".clients-slide-container").innerHTML = html;
  $(".clients-slide-container").fadeIn(500);
  setTimeout(() => (changed = true), 500);

  timer1 = setTimeout(changeSlide, 5000);
  timer2 = setTimeout(hideSlide, 4500);
}
changeSlide();

// show/hide describsion of products
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

// toggle menu
$(".menu-icon").click(function() {
  $(this).toggleClass("close");
  $(".hero-menu-items").slideToggle("slow");
});
