window.onload = function () {
  
/* navbar javascript */
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');

toggleBtn.addEventListner('click', function() {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    });


/* ----------Section(1)_clock---------- */ 
const clockContainer=document.querySelector(".js-clock"),
      clockTitle= clockContainer.querySelector("span");

      function getTime(){
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${
          hours <10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      }

      function init(){
          getTime();
          setInterval(getTime, 1000);
      }

      init();
/*
${지정된 함수를 불러오는 것}  예를들면,
function color(red, blue){
  return ( `I like ${red} and ${blue}`)
}
document.write(color("peru", "purple"));
이런식으로 인자 x,y를 지정해준 뒤 해당 값을 리턴할 때, ${리턴인자}를 넣어준다
그리고 ? = if 와 같은개념 / : = or 과 같은개념
${ hour < 10 ? `0${hour}` : hours }
hour가 10보다 작으면(if) `0을 hour앞에 붙여주고` 그렇지않으면(:) 그냥 hour를 써준다는 뜻
*/



/* ----------Section(2)_img sliding---------- */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

}


