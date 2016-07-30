// ** 자바스크립트의 배열는 '객체' 다
var tpe = []
console.log(typeof tpe) // Object

// 4-1 배열 리터럴
var empty = []
var number = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]

empty[1]  // undefined
number[1]  // 'one'

empty.length  // 0
number.length // 10

// 배열 리터럴과 객체 리터럴과 비슷하니 주의해야됌.
// 대부분 언어에서의 배열 값들이 같은 자료형을 가지지만
// 자바스크립트는 여러가지 자료형을 쓸 수 있는 장점이있다
var misc = [
  'string', 98.6, true, false, null, undefined,
  ['nested', 'array'], {object: true}, NaN,
  Infinity
]
misc.length // 10

// 4-2 length 속성
// 모든 배열에 있는 속성
// 하나 의외인 예제
var myArray = []
myArray[10000000] = true
myArray.length  // = 10000001
// 단지 하나의 속성을 가지지만 배열의 길이는 1이 아니다.

// 이 밑은 위의 number 배열을 이용한 예제
// 배열에 새로운 항목을 추가할때
// 1)
number[number.length] = 'push'
// 2) push로 하는 방법
number.push('push')
// number = [  'zero', 'one', 'two', 'three', 'four',
//  'five', 'six', 'seven', 'eight', 'nine', //'push'//]


// 4-3 삭제
// 1) delete 연산자 사용
delete number[2]; // 결과는  number = [  'zero', 'one', //undefined//, 'three', 'four',
                  //  'five', 'six', 'seven', 'eight', 'nine', 'push']
// 이런식으로 배열에 '구멍'이 생기게 됨. 보통은 지워지면 다시 배열하는 방법을 한다고 함
// 2) splice메소드 사용
number.splice(2,1)
// 결과는  number = [  'zero', 'one', // // 'three', 'four',
//  'five', 'six', 'seven', 'eight', 'nine', 'push']
// 삭제된 속성 뒤에 있는 모든 속성이 삭제된 후에 새로운 이름으로 다시 삽입됨
// 배열에 항목이 많이 있으면 느려지는 단점 존재


// 4-4 열거
for(var i =0; i< myArray.length; i+=1) {
  document.writeln(myArray[i])
}
// 이외에 for in 문도 있지만 권장하지 않는다 그 이유는
// 보통 열거한다~ 라고 하면 순서대로, 차례대로 열거한다 라는 말이기 때문인데
// for in 문을 쓰면 속성들의 순서를 보장하지 못함
// 또한 프로토타입 체인에 있는 예상치 못한 속성도 열거될 수 있음

// 4-5 객체와 배열의 혼동
// 자바스크립트 프로그램에서 흔한 오류 중 하나는 배열이 필요할 때 객체를 사용한다거나
// 객체가 필요할 때 배열을 사용하는 경우임
// 규칙은 1) 속성이름이 작은크기의 연속된 정수이면 배열을 사용
// 2) 그렇지 않으면 객체를 사용

// 자바스크립트 자체도 배열과 객체를 혼동하고 있음. (맨 첫줄 참고)
// 배열인지 객체인지 구별해주는 is_array를 작성해보자
var is_array = function(value) {
  return value &&
    typeof value === 'object' &&
    typeof value.length === 'number' &&
    typeof value.splice === 'function' &&
      !(value.prototypeIsEnumerable('length'))
}
//   !(value.prototypeIsEnumerable('length'))
// length 속성이 열거 가능한지를 말함, 앞에서 말했듯이 Array는  for in 문에서 열거가
// 안되지만(false), Object는 가능함(true)


// 4-6 배열의 메소드
// 3장의 Object.prototype.method를 이용
Array.method('reduce' function(f, value) {
  for(var i=0; i<this.length; i++){
    value = f(this[i], value)
  }
})
// reduce 메소드는 연산 함수와 연산을 저장할 value 값을 받아
// 배열안의 값들을 연산 함수대로 연산 결과를 출력해주는 함수
var data = [4,8,15,16,23,42]

var add = function(a,b) {
  return a+b
}
var mult = function(a,b) {
  return a*b
}

var sum = data.reduce(add, 0)  // 108
var product = data.reduce(mult, 1)  // 7418880
// data 배열에 total 메소드 추가
data.total = function ( ) {
  return this.reduce(add,0)
}
//
