function goLink() {
    var n = document.form1.links.selectedIndex;
    //select 태그에서 선택된 값의 위치 또는 순서 index를 알려면 selectedIndex 속성을 사용한다. 이 속성은 선택된 태그의 index 넘버를 반환해준다

    if(n==1){          //if(n!=0) 을 바꾸어보았음
        location.href=document.form1.links.option[n].value;
    }
}


var s = document.getElementById('survey');
s.addEventListener('submit', function(event) {       //첫번째 인자(submit)의 이벤트가 발생하면, 두번째 인자인 익명함수가 실행된다.

    if(document.getElementById('name').value.length===0){
        alert('Name을 입력해 주세요');
        event.preventDefault;   //preventDefault 라는 메소드의 역할은 submit이 안된다(action프로퍼티로 전송되는 것을 방지한다.) 기본동작의 취소 기능으로 사용하는 메소드 
    }
});