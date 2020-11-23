"use strict";

/* number game */
var time=50; // 게임 시간 - 50초
var timesup=0;
var started=0;

/* timer */

function CountDown() {
	if(time>0) {
		document.math.timer.value=time;
		time=time-1;
    var gameTimer=setTimeout("CountDown()", 1000)
    }
	else if (time==0) {
		document.math.timer.value="0";
	    timesup=1;
	    alert('Time Over'); // 시간이 끝나고 난 후 나타나는 메세지
	    document.math.firstnum.value="";
	    document.math.operator.value="";
	    document.math.secondnum.value="";
	    document.math.answer.value="";
	}
}

/* game start */
function startgame() {
    if (started!=0) { 
        alert('이미 게임을 하셨습니다.\n\n새게임 버튼을 누르시고 다시 해주세요.');
    }
    else {
        started=1;
         CountDown();
         getProb();
    }
}

function randnum(min,max) {
    var num=Math.round(Math.random()*(max-min))+min;
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
        var choose1=randnum(choose2,50);
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
        var choose1=choose2 * randnum(0,10);
        document.math.firstnum.value=choose1;
        document.math.secondnum.value=choose2;
        rightanswer=choose1 / choose2;
    }
}
/* answer submit */    
function answerit() {
    if (started==0) {
        // 시작하지 않고 바로 답버튼을 눌렀을때
        alert("Click the 'Game Start' button");
    }
    else {
    if (timesup!=0) {
    // 이것역시 시간이 끝나고 나타나는 메세지
        alert('Time Over');
    }
    else {
        var theiranswer=eval(document.math.answer.value);
        var theirpoints=eval(document.math.points.value);
    if (theiranswer==null) {
    // 게임중 답란에 답을 적지 않고 답버튼을 눌렀을때 나타나는 메세지
        alert("After type on your answer about this question, click on the 'answer' button");
        document.math.answer.select();
    }
    else {
    if (theiranswer==rightanswer) {
    // 문제의 답이 맞았을경우 나타나는 메세지
        alert('Right Answer!');
        theirpoints++;
        document.math.points.value=theirpoints;
    }
    else {
        // 문제의 답이 틀렸을 경우 나타나는 메세지
        // theiranswer는 틀린답을 나타내고 rightanswer는 정확한 답을 나타낸다.
        alert(theiranswer+ " is wrong answer.\n\nThe right answer is "+rightanswer+".")
    }
        document.math.answer.select();
        getProb();
    }
    }
    }
}

