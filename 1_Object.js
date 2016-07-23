//document.writeln('Hello, world!');

//1. 객체
//1-1 객체 리터럴
// 빈 객체 생성
var empty_object = {};
var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
  // first-name: "Jerome",
  // last-name: "Howard"
  // 와 같음.
};
// 중첩된 객체
var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};

//1-2 속성값 읽기
stooge["first-name"];  // "Jerome"
flight.departure.IATA; // "SYD"
// 없는 속성을 불러오면 undefined 반환

// || 연산자 이용하여 기본값 지정 가능
var middle = stooge["middle-name"] || "{none}"
var status = flight.status || "unknown"

//1-3 속성값 갱신
// 해당 속성이 이미 존재한다면 속성의 값만 교체해줌
stooge["first-name"] = 'dong'
// 반대로 해당 속성이 존재하지 않다면 속성을 객체에 추가해줌
stooge["middle-name"] = 'Lester'
stooge.nickname = 'Curly'
flight.equipment = {
  model: 'Boeing 777'
}
flight.status = 'overdue'

// 1-4 참조
// 객체는 '무조건' 참조 방식으로 전달됨 복사 아님
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// 객체 stooge를 x에 복사한것이 아닌 참조하여 같은 값이 되므로
// x.nickname 은 stooge.nickname(nick)와 같아진다.

// 1-5 프로토타입(prototype)
if(typeof Object.create !== 'function') { // 함수타입이 아니면
  Object.create = function(o) {
    var F = function() {}
    F.prototype = o
    return new F()
  }
}
// 여기선 Object create메소드를 구현하는 코드임
// 이 create메소드는 넘겨받은 객체를 프로토타입으로 하는 새로운 객체를
// 생성하는 메소드임
// 함수는 다음장에 자세히.
var another_stooge = Object.create(stooge)
stooge.profession = 'actor';
another_stooge.profession // <- 'actor'
// 프로토타입 연결은 오로치 객체의 속성을 읽을 때만 사용한다.
// *프로토타입 체인은 뒤에 장에

// 1-6 리플렉션(reflection)
// *변수의 타입을 체크하고 객체의 구조를 탐색하는 과정을 리플렉션 이라고 한다.
typeof flight.number
// 'number' or 'string' or 'object' or 'undefined'
typeof flight.toString
// 'function'
// 이와같이 프로토타입 체인 상에 있는 속성을
// 반환할 수 있기 때문에 조심

flight.hasOwnProperty('number') // true
flight.hasOwnProperty('constructor') // false
// hasOwnProperty 메소드를 이용하는 방법
// 객체에 특정 속성이 있는지를 true, false 로 알려줌,
// 프로토타입 체인은 바라보지 않기 때문에 구별 가능

// 1-7 열거(Enumeration)
// for in 구분으로 속성 이름들을 열거
var name;
for(name in another_stooge) {
  if(typeof another_stooge[name] !== 'function') {
    document.writeln(name + ': ' + another_stooge[name])
  }
}
// 속성 순서를 정해서 열거하는 방법
var properties = [
  'first-name',
  'middle-name',
  'last-name',
  'profession'
];
for(var i=0; i<properties.length; i++){
  document.writeln(name + ': ' + another_stooge[name])
}

// 1-8 삭제
// delete 연산자를 이용하여 객체의 특정 속성을 삭제함
// 삭제 역시 프로토타입 연결 상엔 접근 안함
delete another_stooge.nickname
// another_stooge 객체의 nickname 프로퍼티(속성) 삭제
// 만약, nickname 속성과 nickname '프로토타입'의 속성이 존재한다면
// 속성으로서의 nickname은 지워지고 프로토타입 속성으로서의 nickname은 남음

// 1-9 최소한의 전역변수 사용
// 자바스크립트는 전역변수를 쓴다고 보면됨 => 유연성 약화
// 해결책
var MYAPP = {} // 빈 객체 생성

MYAPP.stooge = {
  // ... 속성과 속성값들
}

MYAPP.flight = {
  // ... 속성과 속성값들
}
// MYAPP 이란 변수를 다른 전역변수를 위한 컨테이너로 사용하기
// 애플리케이션이나 위젯 또는 라이브러리 연동시 문제점 최소화
// 가독성 뛰어남
