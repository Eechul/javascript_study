
// 3-1 의사클래스 방식
var Mammal = function(name) {
  this.name = name;
}

Mammal.prototype.get_name = function(){
  return this.name;
}

Mammal.prototype.says = function() {
  return this.saying || '';
}

var myMammal = new Mammal('Herb the Mammal')
var name = myMammal.get_name() //  Herb the Mammal

// 새로운 생성자 함수를 정의하고 이 함수의 prototype을 Mammal 인스턴스로
// 대체하는 방식으로 또다른 의사 클래스를 만들 수 있음
var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
}
// Cat.prototype을 Mammal의 새 인스턴스로 대체
Cat.prototype = new Mammal();

// 새로운 prototype에 purr와 get_name 메소드 추가
Cat.prototype.purr = function(n) {
  var s = '';
  for(var i=0; i<n; i+=1) {
    if(s) {
      s+= '-'
    }
    s+='r';
  }
  return s;
};
Cat.prototype.get_name = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
}

var myCat = new Cat('Henrietta')
var says = myCat.says() // meow
var purr = myCat.purr(5) // r-r-r-r-r
var name = myCat.get_name() // meow Henrietta meow


// 3-2 객체를 기술하는 객체
var myObject = maker(f, l, m, c, s) // 다음과 같은 작성 대신에
var myObject = maker({
  first: f,
  last: l,
  state: s,
  city: c
})  // 다음과같은 '객체' 로 인수를 넘겨줄 수 있음
  // 인수 순서 맞출 필요없고, 생성자의 기본값들이 잘 설정되있다면
  // 인수들을 생략할 수도 있음. 가독성 증가

// 3-3 프로토타입 방식
// 클래스에 의한 상속보다 더 간단함
var myMammal = {
  name : 'Herb the Mammal',
  get_name : function () {
    return this.name;
  },
  says : function () {
    return this.saying || '';
  }
}
// 1_Object에서 썼던 create 메소드를 쓰면 많은 인스턴스를 만들 수 있음.
// 앞에서 설명한 의사 클래스와 관계가 깊으며 언어를 이해하는데에 좋은 방법
var myCat = Object.create(myMammal)
myCat.name = 'Henrietta'
myCat.saying = 'meow'
myCat.purr = function(n) {
  var s = '';
  for(var i=0; i<n; i+=1) {
    if(s) {
      s+= '-'
    }
    s+='r';
  }
  return s;
}
myCat.get_name = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
}


// 3-4 함수를 사용한 방식
// 위의 프로토타입에 의한 상속 패턴의 한가지 단점은 private 속성을
// 가질수 없다는 것임. 모든 속성이 public

// 1) 새로운 객체를 생성한다. (new연산자, 객체 함수 호출,
// 객체 리터럴, Object.create )
// 2) 필요한 private 변수와 메소드 정의
// 3) that에 새로운 객체를 할당 후 메소드 추가,
// 이때 추가되는 메소드들은 함수의 매개변수와 2)의 private 변수와 메소드 접근을
// 할 수 있는 권한 가짐
var mammal = fucntion(spec) {
  var that = {}

  that.get_name = function() {
    return spec.name
  };
  that.says = function() {
    return spec.saying || '';
  };

  return that
}
var myMammal = mammal({name: 'Herb'})
var myMammal.getname() // Herb

//의사 클래스 패턴에선 Cat 생성자 함수가 Mammal 생성자가 하는 작업과 같은 작업을
// 중복해서 해야했지만, 함수형 패턴에서는 그럴 필요가 없음
// Cat 생성자 함수 자신만 신경 쓰면 됨
var cat = function(spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec)   // 이 부분 한번으로 의사 클래스 패턴에서 했던
                            // 중복 작업을 없앴다고 생각함.
  that.purr = function(n) {
    var s = ''
    for(var i=0; i<n; i+=1) {
      if(s) {
        s+= '-'
      }
      s+='r'
    }
    return s
  }
  that.get_name = function() {
    return this.says() + ' ' + this.name + ' ' + this.says()
  }
  return that
}
// 함수형 패턴은 super 메소드를 다를 수 있는 방법을 제공함
// super 메소드란 해당 메소드를 실행하는 합수를 반환하는 것
// Function.prototype.method = function(name, func) {
//   this.prototype[name] = func;
//   return this;
// } 2_function.js 에 존재
Object.method('superior', function(name) {
  var that = this,
      method = that[name]
  return function() {
    return method.apply(that, arguments)
  }
})

var coolcat = function(spec) {
  var that = cat(spce),
      super_get_name = that.superior('get_name')
  that.get_name = function() {
    return 'like ' + super_get_name() + ' baby';
  }
  return that
}
// 이렇듯 함수형 패턴은 유연성이 좋고 의사 패턴보다 작업량이 작고
// 정보은닉, super 메소드까지 접근 할 수 있는 방법 제공함
