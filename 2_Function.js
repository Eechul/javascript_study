// 2-1 함수 리터럴
var add = function(a,b) {
  return a + b;
}
// 1) function 에약어, 2) 선택사항인 함수이름, 3) 가로의 매개변수 집합
// 4) 중괄호 안의 문장들의 집합

// 2-2 호출
// 1) 메소드 호출 패턴
var MyObject  {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  },
  getValue: function() {
    return this.value
  }
}
MyObject.increment( )
document.writeln(MyObject.value) // 1
MyObject.increment(2)
document.writeln(MyObject.value) // 3
// 2) 함수 호출 패턴
MyObject.double = function ( ) {
  var that = this
  var helper = function( ) {
    that.value = add(that.value, that.value)
  }
  helper( );
}
MyObject.double();
document.writeln(MyObject.getValue( )) // 6
// 3) 생성자 호출 패턴 [권장하지 않는다고 함]
var Quo = function(string) {
  this.status = string
}
Quo.prototype.get_status = function( ) {
  return this.status
}
var myQuo = new Quo("confused")
document.writeln(myQuo.get_status());
// 4) apply 호출 패턴 [apply == call]
var array = [3,4];
var sum = add.apply(null, array); // sum은 7
var statusObject = {
  status: 'A-OK'
}
var status = Quo.prototype.get_status.apply(statusObject)

// 2-3 예외
var add = function(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name : 'TypeError',
      message : 'add needs numbers'
    } // 실행 중단시켜버림
  }
  return a+b
}
// 위에 예외 객체(throw)는 try문의 catch
var try_it = function() {
  try {
    add('seven');
  } catch(e) {
    document.writeln(e.name + ': '+e.message)
  }
}
try_it();

// 2-6 기본 타입에 기능 추가
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
}
// method 활용하기
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this)
})
(-10/3).integer() // -3
(10/3).integer() // 3

// 2-8 유효범위(Scope)
var foo = function() {
  var a = 3, b = 5;

  var bar = function() {
    var b = 7, c = 11;
    // 이 시점에서 a는 3 , b는 7, c는 11
    a += b+c;
    // 이 시점에서 a는 23 b c 같음
  };
  // 이 시점에서 a는 23이 아니라 3, b는 5, c는 정의되지 않음
  bar();
  // a는 21 b는 5 c는 정의되지 않음
}

// 2-9 클로저(closure)
var myObject = function() {
  var value = 0;

  return {
    increment: function(inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  }
}() // **
  // 잘 보면 함수를 할당한 것이 아니라
  // 함수를 호출한 결과를 할당하고 있음
// 위에 Que 생성자를 클로저 형식으로 만들어보자
// get_status라는 메서드 존재
var Quo = function(status) {
  return {
    get_status: function(){
      return status
    }
  }
}
//que 인스턴스 생성
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

// 2-10 콜백(callback)
// 네트워크관련 코드와 상관없음을 알림
var request = prepare_the_request();
send_request_asynchronously(request, function(response) {
  display(response)
}) // 비동기 식으로 response를 얻는다.


// 2-13 커링(Curry)
// 2-14 메모이제이션(memoization)
// 커링과 메모이제이션은 이해가 잘 안됨. 한번 더 볼것.
