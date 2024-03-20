
$(document).ready(function()
{
    const var_scroll= 178;
    $(window).scroll(function(){
        if($(window).scrollTop() > var_scroll) {
            $('#nav').addClass('topzero');
		}
    });
    $(window).scroll(function(){
        if($(window).scrollTop() < var_scroll) {
            $('#nav').removeClass('topzero');
		}
    });
    $('#btnID').click(function()
    {
        $('#inform-box').addClass('active');
        setTimeout(function(){
            window.location = "index.html"
        },3000);
        
    });
    showSlides(1);
});
let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}