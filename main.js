let currentSlide = 0;
const slides = document.querySelectorAll('.slide-image .slide')


function slideShow(index){
    for (let i = 0; i < slides.length ; i++){
        slides[i].style.display ='none';
    }
    slides[index].style.display='block';
}

document.querySelector('.back').addEventListener('click', function() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slideShow(currentSlide);
});

document.querySelector('.next').addEventListener('click', function() {
    currentSlide++;
    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slideShow(currentSlide);
});

let timer;

function startAuto() {
  timer = setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    slideShow(currentSlide);
  }, 2000);
}

var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Loại bỏ các lớp active khỏi tất cả các menu item.
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    
    // Thêm lớp active vào menu item được nhấn.
    this.classList.add('active');
  });
});


