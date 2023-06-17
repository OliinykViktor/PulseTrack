
// console.log(data);

const slides = document.querySelectorAll('.carousel__slide'),
    prev = document.querySelector('.carousel__slides-prev'),
    next = document.querySelector('.carousel__slides-next');

function showItem(elem) {
    elem.classList.add("show");
    elem.classList.remove("hide"); 
};

function hideItem(elem) {
    elem.classList.add("hide");
    elem.classList.remove("show"); 
};
showSlides(slideIndex=1);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => {
        hideItem(item)      
    });
    showItem(slides[slideIndex - 1])

};

function plusSlides (n) {
    showSlides(slideIndex += n);
};

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});

const pageUp = document.querySelector('.pageUp');

window.addEventListener('scroll', ()=>{
    window.scrollY>800?showItem(pageUp):hideItem(pageUp);
});

const catalogeTabs = document.querySelector('.cataloge__tabs'),
    catalogeTabItems = document.querySelectorAll('.cataloge__tab');

catalogeTabs.addEventListener('click', (e) => {
  const target = e.target;
  console.log(e.target.index);
  catalogeTabItems.forEach(tab => tab.classList.remove('cataloge__tab_active'));
  target.parentNode.classList.add('cataloge__tab_active');
});
