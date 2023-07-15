const tabItem = document.querySelectorAll('.tabs_btn_item');
const tabContent = document.querySelectorAll('.tabs_content_item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
});
function open(evt){
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn_item-active');
  });
  tabTarget.classList.add('tabs_btn_item-active');
  tabContent.forEach(function(item){
    item.classList.remove('tabs_content_item-active');
  })
  document.querySelector(`#${button}`).classList.add('tabs_content_item-active');
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector(".header_inner").classList.toggle("open");
})
})







const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });