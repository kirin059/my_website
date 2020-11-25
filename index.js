"use strict";

/* navbar */
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');

toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    });


/* Section(1)_clock*/ 
const clock=document.querySelector('.main-clock');

    function getTime() {
      const time = new Date();
      const minutes = time.getMinutes();
      const hours = time.getHours();
      const seconds = time.getSeconds();
      //clock.innerHTML = hour + ":" + minutes + ":" + seconds;
      clock.innerHTML = `${                      /* 시간이 두자리로 나오게 하는 명령문 */
        hours <10 ? `0${hours}` : hours
        }
        :${    
        minutes < 10 ? `0${minutes}` : minutes
        }
        :${
        seconds < 10 ? `0${seconds}` : seconds
        }`
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
그리고 ? 는 if 와 같은개념,  : 는 or 과 같은개념
${ hour < 10 ? `0${hour}` : hours }
hour가 10보다 작으면(if) `0을 hour앞에 붙여주고` 그렇지않으면(:) 그냥 hour를 써준다는 뜻
*/



/* Section(2)_img sliding */
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
          var prev = document.getElementsByClassName('prev');
          var next = document.getElementsByClassName('next');

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
          setTimeout(showSlides, 2000);
}


//footer_dark mode
var Body = {
  setBackColor : function(color) {
  document.querySelector('body').style.backgroundColor=color;
  },
  setColor : function(color) {
  document.querySelector('body').style.color=color;
  }
}

var Link = {
  setColor : function (color){
  var alist=document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
      alist[i].style.color=color;
      i=i+1;
  }
  }
}

function handler(self){
  var target=document.querySelector('body')
  if(self.value==='night') {
      Body.setBackColor('black');
      Body.setColor('white');
      self.value='day';

      Link.setColor('powderblue');

  } else {
      Body.setBackColor('white');
      Body.setColor('black');
      self.value='night';

      Link.setColor('blue');
      }
  }