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
