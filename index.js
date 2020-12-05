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


/* portal 
  function goLink() {
    var n = document.form1.links.selectedIndex;   
    //select 태그에서 선택된 값의 위치 또는 순서 index를 알려면 selectedIndex 속성을 사용한다. 이 속성은 선택된 태그의 index 넘버를 반환해준다

    if(n!=0){          //0은 disable 되어있음(0이후부터 적용하라는 뜻)
        location.href=document.form1.links.options[n].value;   //option이 여러개 있을때 options = option의 리스트를 뜻하는 것임
    }
  } 
*/
function goLink() {
    var n = document.form1.links.selectedIndex;   
  //select 태그에서 선택된 값의 위치 또는 순서 index를 알려면 selectedIndex 속성을 사용한다. 이 속성은 선택된 태그의 index 넘버를 반환해준다

    if(n!=0){    
      if(document.form1.links.options[n].target=="_blank"){
        window.open(document.form1.links.options[n].value);
      }else{
        location.href=document.form1.links.options[n].value;   
      }
    }
}
 
//option이 여러개 있을때 options = option의 리스트를 뜻하는 것임



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

    /* 설문조사 js (이름을 공백으로 제출하면)
    var s = document.getElementById('survey');
      s.addEventListener('submit', function(event) {       //첫번째 인자(submit)의 이벤트가 발생하면, 두번째 인자인 익명함수가 실행된다.

      if(document.getElementById('name').value.length===0){
          alert('Name을 입력해 주세요');
          event.preventDefault;   //preventDefault 라는 메소드의 역할은 submit이 안된다(action프로퍼티로 전송되는 것을 방지한다.) 기본동작의 취소 기능으로 사용하는 메소드 
      }
    });
    */