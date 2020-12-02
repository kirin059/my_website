function goLink() {
    var n = document.form1.links.selectedIndex;
    //select 태그에서 선택된 값의 위치 또는 순서 index를 알려면 selectedIndex 속성을 사용한다. 이 속성은 선택된 태그의 index 넘버를 반환해준다

    if(n==1){          //if(n!=0) 을 바꾸어보았음
        location.href=document.form1.links.option[n].value;
    }
}
