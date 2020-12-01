"use strict";

/* number game */
var time=30; // 게임 시간 30초
var started=0;  //바로시작

/* timer */
function CountDown() {
	if(time>0) {
		document.math.timer.value=time;   //form submit 할 때 서버에서 name명으로 값을 가져올 수 있다. (name=timer), input으로 값을 전달(submit)할때 name은 전달 받는 페이지 입장에서 값을 꺼낼 수 있는 키이다. 값은 value. 따라서 document.math.timer.value=time;는 time(50으로 설정, time-1로 설정)의 값(value)을, 본문 math안의 name이 timer인 곳으로 전달
		time=time-1;    //time을 50(초)으로 설정해 놓았고 1(초)씩 줄어들도록 설정한다(time>0 까지)
    var gameTimer=setTimeout("CountDown()", 1000)
    }
	else if (time==0) {   
		document.math.timer.value="0";
	    alert('Time Over'); // 시간이 끝나고 난 후 나타나는 메세지
	    document.math.firstnum.value="";   //time이 0이되면 모든 값을 초기화, 빈값("")으로 설정
	    document.math.operator.value="";
	    document.math.secondnum.value="";
	    document.math.answer.value="";
	}
}

/* game start */
function startgame() {
    if (started!=0) {    //var started=0;으로 설정하였기 때문에,  0이아닌게(started!=0) true면 alert가 뜬다
        alert('이미 게임을 하셨습니다.\n\n새게임 버튼을 누르시고 다시 해주세요.');
    }   
    else {
        started=1;     //?????? 이걸 지우면 if문 내의 alert가 뜨지 않는다. 이것의 의미는 무엇일까
        CountDown();
        getProb(); 
    }   //else일때 started가 false일 때 실행된다
}

/* question */
function randnum(min,max) {
    var num=Math.round(Math.random()*(max-min))+min;  //Math.random()은 0과 1사이의 랜덤숫자를 생성하며, Math.random() * (max - min) + min;는 min보다 크거나 같으며, max보다 작다는 뜻이다.(최댓값은 제외, 최솟값은 포함)
    return num;
}
    var choose, rightanswer

function getProb() {
    choose=randnum(1,4);  
    if (choose=="1") {	
        document.math.operator.value="+";
            var choose1=randnum(0,50);
            var choose2=randnum(0,50);
        document.math.firstnum.value=choose1;
        document.math.secondnum.value=choose2;
        rightanswer=choose1 + choose2;
    }
    if (choose=="2") {
        document.math.operator.value="-";
            var choose2=randnum(0,50);
            var choose1=randnum(choose2,50);  //사용자가 적는 정답이 양수만 나와야 하니깐 최소값을 randnum으로 줌
        document.math.firstnum.value=choose1;
        document.math.secondnum.value=choose2;
        rightanswer=choose1 - choose2;
    }
    if (choose=="3") {
        document.math.operator.value="x";
            var choose1=randnum(0,10);
            var choose2=randnum(0,10);
        document.math.firstnum.value=choose1;
        document.math.secondnum.value=choose2;
        rightanswer=choose1 * choose2;
    }
    if (choose=="4"){
        document.math.operator.value="/";
            var choose2=randnum(1,10);
            var choose1=choose2 * randnum(0,10);  //사용자가 적는 정답이 양수만 나와야 하니깐
        document.math.firstnum.value=choose1;
        document.math.secondnum.value=choose2;
        rightanswer=choose1 / choose2;
    }
}

/* answer submit */    
function answerit() {
    //시작하지 않고 바로 답버튼 눌렀을때
    if (started==0) {    //전역변수 var started=0; 이기때문에 true
        alert("Click the 'Game Start' button");
    }
    //시작버튼 누른 후 게임 진행중일때
    else {
        //타이머가 0일때
        if (time==0) {
            alert('Time Over');
        }
        //타이머가 진행중일때
        else {
            var theiranswer=eval(document.math.answer.value);  //eval()안의 값을 자바스크립트 코드로 해석하여 출력
            var theirpoints=eval(document.math.points.value);
            // 게임중 답란에 답을 적지 않고 답버튼을 눌렀을때
            if (theiranswer==null) {
                alert("After type on your answer about this question, click on the 'answer' button");
                document.math.answer.select();
            }
            // 게임중 답란에 답을 적었을때
            else {
                    // 문제의 답이 맞았을때
                    if (theiranswer==rightanswer) {
                        alert('Right Answer!');
                        theirpoints++;
                        document.math.points.value=theirpoints;
                    }
                    // 문제의 답이 틀렸을때
                    else {
                        // theiranswer는 사용자가 적은 답(오답)을 나타내고 rightanswer는 정확한 답을 나타낸다.
                        alert(theiranswer+ " is wrong answer.\n\nThe right answer is "+rightanswer+".")
                    }           // 백슬래쉬(\) + n 은 줄바꿈
                    document.math.answer.select();
                    getProb();
            }
        }
    }
}

