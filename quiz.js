"use strict";

/* 퀴즈 점수, 문제 데이터, 문제 번호도 하나의 퀴즈 정보 객체로 구성하기 위해 생성자 함수(function)로 정의하기 */
// 문제 객체(생성자 함수)
function Question(text, choice, answer) {
    this.text = text;      // 질문 텍스트
    this.choice = choice;  // 선택할 답들(배열)
    this.answer = answer;  // 정답 정보
 }
 
 // 퀴즈 정보 객체
 function Quiz(questions) {
    this.score = 0;             // 점수
    this.questions = questions; // 문제
    this.questionIndex = 0;     // 진행중인 문제 번호
 }
 
 // 정답 확인 메서드
 Quiz.prototype.correctAnswer = function(answer) {      //correctAnswer 는 Quiz 생성자의 prototype 속성으로 정의 -> correctAnswer 프로토타입 속성값은 익명함수가 되기때문에 메서드가 된다.
    return answer == this.questions[this.questionIndex].answer;  //변수 answer(사용자가 입력하는 답)가 this.questions[this.questionIndex].answer 가 가진 문제의 정답 정보와 비교하여 값이 같으면 true, 아니면 false반환(정답여부 판정)
 }
 
 // 배열 변수 questions를 선언하고 문제를 추가한다
 var questions = [
    new Question('다음 중 과일이 아닌 것은?', ['파인애플', '딸기', '토마토', '사과'], '토마토'),
    new Question('다음 중 키가 170cm 이하인 여배우는?', ['Blake Lively', 'Julia Roberts', 'Gwyneth Kate Paltrow', 'Natalie Portman'], 'Natalie Portman'),
    new Question('다음 중 배우 "이병헌"의 출연작이 아닌 것은?', ['공동경비구역 JSA', '누구나 비밀은 있다', '그 해 여름', '신세계'], '신세계'),
    new Question('다음 CSS 속성 중 글자의 굵기를 변경하는 속성은?', ['font-size', 'font-style', 'font-weight', 'font-variant'], 'font-weight'),
    new Question('다음 중 우리나라 보물1호는?', ['동대문', '서대문', '남대문', '북대문'], '동대문'),
    new Question('다음 중 대한민국에서 가장 남쪽에 있는 섬은?', ['독도', '마라도', '제주도', '울릉도'], '마라도'),
    new Question('다음 중 표현법이 다른 하나는?', ['이것은 소리 없는 아우성', '즐거운 비명', '찬란한 슬픔의 봄', '죽어도 아니 눈물 흘리오리다'], '죽어도 아니 눈물 흘리오리다')
 ];
 
 // 퀴즈 객체 생성 (quiz객체 속성은 위에서 정의한 것처럼, score는 0(초기값), questions는 new Question(text,choice, answer), questionIndex는 0(초기값으로 문제 진행 번호))
 var quiz = new Quiz(questions);
 
 // 문제 출력 함수
 function updateQuiz() {
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;         //문제번호
    var choice = document.querySelectorAll('.btn');    
 
    // 문제 출력
    question.innerHTML = '문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text;
                                               //현재 출제되고 있는 문제 텍스트(배열)
    // 선택 출력
    for (var i = 0; i < 7; i++) {
       choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
    }
 
    progress();
 }
 
 function progress() {
    var progress = document.getElementById('progress');
    progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + '/ ' + quiz.questions.length;
 }
 
 var btn = document.querySelectorAll('.btn');
 
 // 입력 및 정답 확인 함수
 function checkAnswer(i) {           //4개의 버튼으로 사용자가 선택한 답을 입력받고 정답을 처리하는 함수  = checkAnswer() 함수
    btn[i].addEventListener('click', function() {
       var answer = btn[i].innerText;
 
       if (quiz.correctAnswer(answer)) {
          alert('정답입니다!');
          quiz.score++;
       } else {
          alert('틀렸습니다!');
       }
 
       if (quiz.questionIndex < quiz.questions.length - 1) {
          quiz.questionIndex++;
          updateQuiz();
       } else {
          result();
       }
    });
 }
 
 function result() {
    var quizDiv = document.getElementById('quiz');
    var per = parseInt((quiz.score * 100) / quiz.questions.length);
    var txt = '<h1>결과</h1>' + '<h2 id="score">당신의 점수: ' + quiz.score + '/' + quiz.questions.length + '<br><br>' + per + '점' + '</h2>';
 
    quizDiv.innerHTML = txt;
 
    // 점수별 결과 텍스트
    if (per < 40) {
       txt += '<h2>더 분발하세요</h2>';
       quizDiv.innerHTML = txt;
    } else if (per >= 40 && per < 70) {
       txt += '<h2>무난한 점수네요</h2>'
       quizDiv.innerHTML = txt;
    } else if (per >= 70) {
       txt += '<h2>훌륭합니다</h2>'
       quizDiv.innerHTML = txt;
    }
 }
 
 for (var i = 0; i < btn.length; i++) {
    checkAnswer(i);
 }
 
 updateQuiz();
 