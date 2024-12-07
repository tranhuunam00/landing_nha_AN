var slideIndex = 1;
var slideInterval = startSlideInterval();

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Ẩn tất cả các slide và loại bỏ lớp fade-in
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fade-in");
    slides[i].classList.add("fade-out");
  }

  // Hiển thị slide hiện tại
  slides[slideIndex - 1].classList.remove("fade-out");
  slides[slideIndex - 1].classList.add("fade-in");

  // Cập nhật các chấm điểm
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

function startSlideInterval() {
  return setInterval(function () {
    plusSlides(1);
  }, 3000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = startSlideInterval();
}
