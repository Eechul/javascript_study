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
var middle = stooge["middle-name"] || "{none}";
var status = flight.status || "unknown";
