"use strict";

/* navbar */
  const toggleBtn = document.querySelector('.navbar_toggleBtn');
  const menu = document.querySelector('.navbar_menu');
  const icon = document.querySelector('.navbar_icon');

  toggleBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
      icon.classList.toggle('active');
      }
    );


/* portal */
  function goLink() {
    var n = document.form1.links.selectedIndex;   
    //select 태그에서 선택된 값의 위치 또는 순서 index를 알려면 selectedIndex 속성을 사용한다. 이 속성은 선택된 태그의 index 넘버를 반환해준다

    if(n!=0){          //0은 disable 되어있음(0이후부터 적용하라는 뜻)
        location.href=document.form1.links.options[n].value;   //option이 여러개 있을때 options = option의 리스트를 뜻하는 것임
    }
  } 

    var s = document.getElementById('survey');
        s.addEventListener('submit', function(event) {       //첫번째 인자(submit)의 이벤트가 발생하면, 두번째 인자인 익명함수가 실행된다.

        if(document.getElementById('name').value.length===0){
            alert('Name을 입력해 주세요');
            event.preventDefault;   //preventDefault 라는 메소드의 역할은 submit이 안된다(action프로퍼티로 전송되는 것을 방지한다.) 기본동작의 취소 기능으로 사용하는 메소드 
        }
    });


/* clock */
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






/* slide page */

/* img sliding */
  var slideIndex = 1;      // 현재 이미지는 1이다
  showSlides(slideIndex);

    function plusSlides(n) {        // n은 -1 || 1 을 대입하는 자리
      showSlides(slideIndex += n);  // -1을 넣으면 0이된다(1 += -1 = 0), slideIndex = 0 / showSlides(slideIndex=0)이면 plusSlides라는 뜻
    }                               // 1을 넣으면 slideIndex는 2가 된다     0(pre) 1(현재) 2(next)

    function currentSlide(n) {      // showSlides함수를 실행해서 slideIndex값을 음수가 안나오게 조절(->n이 사진 갯수인 3보다 크게되면 slideIndex를 1로 만들어주고, 0보다 작게되면 slideIndex를 사진 갯수인 3으로 만들어준다)
      showSlides(slideIndex = n);   // showSlides함수는 n값이 1보다 작을땐 3, 3보다 클땐 1이 나오기 때문에, currentSlide는 slideIndex값인 1로 생각하면 된다    
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      var prev = document.getElementsByClassName('prev');
      var next = document.getElementsByClassName('next');

      if (n > slides.length) {      // 전체 갯수(3개)보다 크면 4부터, 4번째는 없으니깐 4번째는 첫번째사진이 되게 (n값(slideIndex, 첫번째페이지, 현재값)이 전체 길이(3)보다 커지면 현재슬라이드 나오게)
        slideIndex = 1              // 첫번쨰사진(4번째는 첫번째 사진으로 반복되게 123 123 123), slideIndex=1이니깐, 위 함수에서 slideIndex=n이라고 했으니깐, n=slideIndex다. slideIndex가 3페이지보다 커지면 첫번째 슬라이드 나오게
      }    
      if (n < 1) {                  // 이전페이지 누른다는 뜻  (1=3이다) 첫번째에서 이전 페이지 누르면 3번째 사진이 나온다 (n값(slideIndex)이 1(slideIndex인 1)보다 작으면, 현재슬라이드는 3번째 슬라이드가 나오게)
        slideIndex = slides.length  //slideIndex(1)가 3번째 슬라이드(= 전체 길이)와 같다
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  // 아예 모든 슬라이드가 안보이게 해놓는다
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");  // replace()함수는 문자열을 바꿀때 사용  .replace("찾을 문자열". "바꿀문자열")
      }                                                                  // 모든 액티브를 없애기("")
      slides[slideIndex-1].style.display = "block";      // 현재 사진만 보이게(for문으로 이미지가 전체 안보이게 이미 설정했으니) , 0(pre) 1(현재) 2(next) 라서 현재슬라이드(1)를 넣으면 0,1,2가 된다
      dots[slideIndex-1].className += " active";         // 현재 눌렀을때 보라색이 active되게(for문으로 버튼이 전체 active되지 않게 이미 설정했으니)
      setTimeout(showSlides, 2000);
    }


    var imgArray=new Array(); 
    imgArray[0]="imgbox1.jpg"; 
    imgArray[1]="imgbox2.jpg"; 
    imgArray[2]="imgbox3.jpg"; 
  
  function showImage(){ 
    var imgNum=Math.round(Math.random()*3); 
    var objImg=document.getElementsByClassName("square_img1", "square_img2", "square_img3"); 
    objImg.src=imgArray[imgNum]; 
    setTimeout(showImage,1000); 
  } 


/* footer_dark mode */
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
        Body.setColor('#f0f4f5');
        self.value='day';

        Link.setColor('powderblue');

      } else {
        Body.setBackColor('#f0f4f5');
        Body.setColor('black');
        self.value='night';

        Link.setColor('white');
        }
      }