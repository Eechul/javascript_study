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


// 2-3 인수 배열 arguments


// 2-4 반환


// 2-5 예외

// 2-6 기본 타입에 기능 추가


// 2-7 재귀적 호출


// 2-8 유효범위(Scope)


// 2-9 클로저(closure)


// 2-10 콜백(callback)


// 2-11 모듈


// 2-12 연속 호출(Cascade)


// 2-13 커링(Curry)


// 2-14 메모이제이션(memoization)
